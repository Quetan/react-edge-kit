import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	publicDir: './public',
	plugins: [react(), TanStackRouterVite()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	}
});
