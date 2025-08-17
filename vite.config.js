import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'care-agency-webpage' // IMPORTANT for GitHub Pages
})
