import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'birthday-cake-from-crush/',
  plugins: [
    react({
    }),
  ],
});
