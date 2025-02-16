import { defineComponent, type PropType } from 'vue';
import styles from './index.module.css';
export default defineComponent({
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  render() {
    return (
      <button class={styles['my-button']}>{this.$slots?.default?.() || this.$props.text}</button>
    );
  },
});
