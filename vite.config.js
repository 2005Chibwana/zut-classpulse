import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite settings: turns on React support. Nothing else is needed for a static site.
export default defineConfig({
  plugins: [react()],
});
