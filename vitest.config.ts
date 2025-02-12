import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.tsx'],
      exclude: [
        'node_modules/',
        '**/*.test.tsx',
        '**/*.spec.tsx',
        'src/test/setup.ts',
      ],
    },
  },
});
