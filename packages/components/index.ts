import { isEven, isOdd } from '@x-ui/shared';
import XButton from './Button/index.vue';
import XTable from './Table/index.vue';
import { type App } from 'vue';
export { XButton, XTable };
export default {
  install: (app: App) => {
    console.log(XButton);
    app.component('XButton', XButton);
    app.component('XTable', XTable);
  },
};
