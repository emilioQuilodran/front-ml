import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    test: {
        include: ['tests/unit/**/*.{test,spec}.{ts,tsx}'],
        exclude:['tests/e2e/**/*'],
        coverage: {
            include: ['src/**/*.{js,jsx,ts,tsx}'],
            exclude: ['**/*.d.ts'],
        },
        globals: true,
        setupFiles: ['./vitestSetup.ts'],
        reporters:['default', 'html'],
        environment:'jsdom'
    }
})