import { isEven, isOdd } from '@x-ui/shared';
import XButton from './Button/index.vue';
import { type App } from 'vue';
export { XButton };
export default {
  install: (app: App) => {
    console.log(XButton);
    app.component('XButton', XButton);
  },
};
