/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite';
import analog from '@analogjs/platform';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  // Load env dari file .env.local / .env
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: env.VITE_APP_BASE || '/',
    build: { target: ['es2020'] },
    plugins: [
      analog({
        ssr: false,
        static: true,
      }),
      tailwindcss(),
    ],
  };
});
