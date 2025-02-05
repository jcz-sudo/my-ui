import { createApp } from 'vue'
import type {App} from "vue"
import Button from './components/Button/Button.vue';

const app = createApp({})
app.component("MyButton",Button)

export default function install(app:App){
  app.component("MyButton",Button)
}