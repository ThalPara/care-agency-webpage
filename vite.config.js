import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Deployed under https://<username>.github.io/care-agency-webpage
export default defineConfig({
  plugins: [react()],
  base: '/care-agency-webpage/'
})
