// import { createApp } from 'vue'
import type {App as app} from "vue"
import Button from './components/Button/Button.tsx';

//测试使用
// import App from "./App.vue"

//测试使用
// const app = createApp(App)
// app.component("MyButton",Button).mount("#app")

// const app = createApp({})
export default function install(app:app){
  app.component("MyButton",Button)
}