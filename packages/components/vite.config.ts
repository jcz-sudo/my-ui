import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
const pathSrc = resolve(__dirname, 'assets');
console.log(6666, pathSrc);
export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    lib: {
      entry: 'index.ts',
      name: 'xUI',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          // 'element-plus': 'ElementPlus',
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use '~/styles/element/index.scss' as *;`,
      },
    },
  },
  resolve: {
    alias: {
      '~/': `${pathSrc}/`,
    },
  },
});
