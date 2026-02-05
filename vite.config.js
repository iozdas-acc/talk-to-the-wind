import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use '/' for most environments, '/talk-to-the-wind/' only for GitHub Pages
const base = process.env.GITHUB_PAGES ? '/talk-to-the-wind/' : '/'

export default defineConfig({
  plugins: [react()],
  base: base,
})
