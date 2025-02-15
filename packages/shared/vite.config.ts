import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
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

