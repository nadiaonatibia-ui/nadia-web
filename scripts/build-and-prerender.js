/**
 * Orquestación del build: compilar con Vite y después inyectar los meta tags.
 *
 * No levanta servidor ni abre puertos ni usa navegador: el prerender es un
 * script de Node puro. Eso hace que el build sea determinista e igual de
 * fiable en cualquier máquina y en el runner de Vercel.
 */

import { spawn } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.join(__dirname, '..')

function run(label, command, args) {
  return new Promise((resolve, reject) => {
    console.log(`\n=== ${label} ===`)

    const child = spawn(command, args, {
      cwd: projectRoot,
      stdio: 'inherit',
      shell: true,
    })

    child.on('error', reject)
    child.on('close', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`${label} falló con código ${code}`))
    })
  })
}

async function main() {
  try {
    await run('Paso 1/2: Build (tsc + vite)', 'npm', ['run', 'build:dev'])
    await run('Paso 2/2: Prerender de meta tags', 'node', ['scripts/prerender.js'])

    console.log('\n✓ Build y prerender completados correctamente.')
    process.exit(0)
  } catch (error) {
    console.error('\n✗ Error:', error.message)
    process.exit(1)
  }
}

main()
