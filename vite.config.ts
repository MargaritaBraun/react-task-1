import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    // globals: true,
    // environment: 'jsdom',
    setupFiles: './test/setup.ts',
    ...configDefaults, // Добавьте это, если необходимо
  },
});
