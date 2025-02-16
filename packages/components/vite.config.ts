import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"

export default defineConfig({
  plugins: [vue(),vueJsx()],
  build:{
    lib:{
      entry:"index.ts",
      name:"MyComponentLibrary",
      fileName:"index"
    },
    rollupOptions:{
      external:["vue"],
      output:{
        globals:{
          vue:"Vue"
        }
      }
    }
  },
  resolve:{
    alias:{
      "@":"/src"
    }
  }
})

