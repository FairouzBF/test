import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    return {
        build: {
            outDir: './build',
        },
        server: {
            port: 3000,
            host: true,
            proxy: {
                '/api/': {
                    target: 'http://localhost:5050',
                    changeOrigin: true,
                    secure: false,
                },
            },
        },
        resolve: {
            alias: [
                {
                    // this is required for the SCSS modules
                    find: /^~(.*)$/,
                    replacement: '$1',
                },
            ],
        },
        optimizeDeps: {
            esbuildOptions: {
                // Node.js global to browser globalThis
                define: {
                    global: 'globalThis'
                },
            }
        },
        plugins: [viteCommonjs(), react()],
        define: {
            'process.env.NODE_ENV': JSON.stringify(mode),
        },
    };
});
