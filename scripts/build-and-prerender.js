import { exec, spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

let previewProcess = null;

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

function startPreviewServer() {
  return new Promise((resolve, reject) => {
    console.log('Starting preview server...');
    previewProcess = spawn('npm', ['run', 'preview'], {
      cwd: projectRoot,
      stdio: 'pipe',
      shell: true,
    });

    let isReady = false;

    previewProcess.stdout.on('data', (data) => {
      const output = data.toString();
      console.log('[Preview]', output.trim());
      if (
        !isReady &&
        (output.includes('localhost') || output.includes('ready in'))
      ) {
        isReady = true;
        setTimeout(() => resolve(), 1000);
      }
    });

    previewProcess.stderr.on('data', (data) => {
      console.error('[Preview Error]', data.toString());
    });

    previewProcess.on('error', reject);

    // Fallback: timeout si no se detecta el mensaje
    setTimeout(() => {
      if (!isReady) {
        isReady = true;
        resolve();
      }
    }, 5000);
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
    await runCommand('npm run build');
    console.log('✓ Build complete\n');

    // Step 2: Start preview server
    console.log('=== Step 2: Starting preview server ===');
    await startPreviewServer();
    console.log('✓ Preview server ready\n');

    // Step 3: Run prerender
    console.log('=== Step 3: Prerendering pages ===');
    await runCommand('node scripts/prerender.js');
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
