// https://vitejs.dev/config/
// plugin vue로 변s

import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        port: 3000,
    },
    build: {
        outDir: 'dist/frontend',
    },
});