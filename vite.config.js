import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages: https://just05me.github.io/yes/ — в dev используем / для удобства
const GITHUB_BASE = '/yes/';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : GITHUB_BASE,
}));
