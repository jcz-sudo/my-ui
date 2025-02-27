import { createApp } from 'vue';
import App from './App.vue';
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';
import { add, sub } from '@x-ui/utils';
import { isEven } from '@x-ui/shared';
import XUI from '@x-ui/components';
console.log(add(1, 2), sub(10, 2));

console.log(isEven(10));
createApp(App).use(XUI).mount('#app');
