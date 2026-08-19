import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('/src/data/modules')) {
              return `academy-${path.basename(id, path.extname(id))}`;
            }
            if (id.includes('/src/data/academyData')) return 'academy-data';
            if (!id.includes('node_modules')) return undefined;
            if (id.includes('/@firebase/firestore/') || id.includes('/firebase/firestore/')) return 'firebase-firestore';
            if (id.includes('/@firebase/auth/') || id.includes('/firebase/auth/')) return 'firebase-auth';
            if (id.includes('/@firebase/') || id.includes('/firebase/')) return 'firebase-core';
            if (id.includes('/react/') || id.includes('/react-dom/') || id.includes('/scheduler/')) return 'react';
            if (id.includes('/lucide-react/')) return 'icons';
            if (id.includes('/motion/')) return 'motion';
            if (id.includes('/jszip/')) return 'archive';
            return 'vendor';
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
