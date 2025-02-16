import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import XUI from '@x-ui/components';
import '@x-ui/components/dist/index.css';

createApp(App).use(ElementPlus).use(XUI).mount('#app');
