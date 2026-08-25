import { exec, spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

let previewProcess = null;
const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, { cwd: projectRoot }, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}

function waitForServerReady(maxRetries = 30, retryDelay = 1000) {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    const checkServer = () => {
      fetch(`${BASE_URL}/`)
        .then((response) => {
          if (response.ok) {
            console.log(`[Build] Preview server ready at ${BASE_URL}`);
            resolve();
          } else {
            throw new Error(`HTTP ${response.status}`);
          }
        })
        .catch((error) => {
          attempts++;
          if (attempts >= maxRetries) {
            reject(
              new Error(
                `Preview server did not become ready after ${maxRetries} attempts (${maxRetries * retryDelay}ms)`
              )
            );
          } else {
            setTimeout(checkServer, retryDelay);
          }
        });
    };

    checkServer();
  });
}

function startPreviewServer() {
  return new Promise((resolve, reject) => {
    console.log(`Starting preview server on port ${PORT}...`);
    previewProcess = spawn('npm', ['run', 'preview', '--', '--port', PORT.toString(), '--strictPort'], {
      cwd: projectRoot,
      stdio: 'inherit',
    });

    previewProcess.on('error', reject);
    previewProcess.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Preview server exited with code ${code}`));
      }
    });

    waitForServerReady()
      .then(resolve)
      .catch(reject);
  });
}

function stopPreviewServer() {
  return new Promise((resolve) => {
    if (previewProcess) {
      console.log('Stopping preview server...');
      previewProcess.kill();
      setTimeout(resolve, 1000);
    } else {
      resolve();
    }
  });
}

async function main() {
  try {
    // Step 1: Build
    console.log('\n=== Step 1: Building ===');
    await runCommand('npm run build:dev');
    console.log('✓ Build complete\n');

    // Step 2: Start preview server
    console.log('=== Step 2: Starting preview server ===');
    await startPreviewServer();
    console.log('✓ Preview server ready\n');

    // Step 3: Run prerender with the fixed port
    console.log('=== Step 3: Prerendering pages ===');
    const prerenderer = spawn('node', ['scripts/prerender.js', PORT.toString()], {
      cwd: projectRoot,
      stdio: 'inherit',
    });

    await new Promise((resolve, reject) => {
      prerenderer.on('close', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`Prerender failed with exit code ${code}`));
        }
      });
      prerenderer.on('error', reject);
    });
    console.log('✓ Prerender complete\n');

    // Step 4: Stop preview server
    await stopPreviewServer();

    console.log('✓ Build and prerender completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('✗ Error:', error.message);
    await stopPreviewServer();
    process.exit(1);
  }
}

main();
