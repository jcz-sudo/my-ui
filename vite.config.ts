import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx()],
  server:{
    port:5174
  },
  build:{
    lib:{
      entry:"./src/main.ts",
      name:"MyComponentLibrary",
      fileName:"main"
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
