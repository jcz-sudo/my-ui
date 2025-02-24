import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

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
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
