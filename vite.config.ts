import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'ViteBoilerplate',
      fileName: 'vite-boilerplate',
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled into your
      // library
      external: [],
      output: {
        // Provide global variables to use in the UMD build for externalized
        // deps
        globals: {},
      },
    },
  },
});
