import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig((command, mode) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  console.log(root, env)
  return {
    plugins: [vue()]
  }
})
