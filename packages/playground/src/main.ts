import { createApp } from 'vue'
import App from './App.vue'

import XUI from "@x-ui/components"
import "@x-ui/components/dist/index.css"

createApp(App).use(XUI).mount('#app')
