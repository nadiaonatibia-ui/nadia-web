import { exec, spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

let previewProcess = null;
let detectedPort = 4173;

function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, { cwd: projectRoot, shell: true }, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}

function findAvailablePort() {
  return new Promise((resolve) => {
    // Try to find which port is actually listening
    let foundPort = false;

    const checkPort = (port) => {
      exec(`netstat -ano | findstr :${port}`, { shell: true }, (error, stdout) => {
        if (!error && stdout.includes('LISTENING')) {
          detectedPort = port;
          console.log(`[Build] Found preview server on port: ${port}`);
          resolve();
        } else if (port < 5000) {
          // Try next port
          checkPort(port + 1);
        } else {
          // Fallback to 4173
          detectedPort = 4173;
          console.log(`[Build] Using fallback port: 4173`);
          resolve();
        }
      });
    };

    checkPort(4173);
  });
}

function startPreviewServer() {
  return new Promise((resolve, reject) => {
    console.log('Starting preview server...');
    previewProcess = spawn('npm', ['run', 'preview'], {
      cwd: projectRoot,
      stdio: 'inherit',
      shell: true,
    });

    previewProcess.on('error', reject);

    // Give the server time to start, then find which port it's on
    setTimeout(() => {
      findAvailablePort().then(resolve).catch(reject);
    }, 3000);
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

    // Step 3: Run prerender with the detected port
    console.log('=== Step 3: Prerendering pages ===');
    const prerenderer = spawn('node', ['scripts/prerender.js', detectedPort.toString()], {
      cwd: projectRoot,
      stdio: 'inherit',
      shell: true,
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
