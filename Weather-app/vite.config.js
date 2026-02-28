import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
'tailwindcss/colors'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
