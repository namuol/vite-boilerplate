import slangPlugin from '@namuol/vite-plugin-slang';
import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [slangPlugin()],
});
