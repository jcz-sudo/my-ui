import ElementPlus from 'element-plus';
import './assets/styles/element/index.scss';

import { isEven, isOdd } from '@x-ui/shared';
import XButton from './Button/index.vue';
import XTable from './Table/index.vue';
import xInput from './Input/index.vue';
import xForm from './Form/index.ts';
import { type App } from 'vue';
export { XButton, XTable, xInput, xForm };
export default {
  install: (app: App) => {
    app.use(ElementPlus, {
      namespace: 'ep',
    });
    console.log(app);
    app.component('XButton', XButton);
    app.component('XTable', XTable);
    app.component('XInput', xInput);
    app.component('xForm', xForm);
  },
};
