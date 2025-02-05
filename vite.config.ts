import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx()],
  server:{
    port:5174
  },
  css:{
    modules: {
      // 自定义生成的类名
      generateScopedName: '[local]__[hash:base64:5]',
      // 是否将 camelCase 格式的类名同时生成对应的 kebab-case 格式
      localsConvention: 'camelCaseOnly', 
      // 配置全局类名，这些类名不会被处理成局部类名
      globalModulePaths: [/global\.css$/] 
    }
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
