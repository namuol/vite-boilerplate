import {defineConfig} from 'vite';
import slangPlugin from '@namuol/vite-plugin-slang';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [slangPlugin()],
});
