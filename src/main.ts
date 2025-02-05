import { createApp } from 'vue'
import type {App as app} from "vue"
import Button from './components/Button/Button.tsx';

import App from "./App.vue"

const app = createApp(App)
app.component("MyButton",Button).mount("#app")

export default function install(app:app){
  app.component("MyButton",Button)
}