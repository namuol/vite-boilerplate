import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';
import wgslRollup from '@use-gpu/wgsl-loader/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [wasm(), topLevelAwait(), react(), wgslRollup()],
  server: {
    port: 8080,
  },
  preview: {
    port: 8080,
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
  },
});
