import { ref, defineComponent } from 'vue';
export default defineComponent({
  name: 'xform',
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  setup() {
    const count = ref(0);
    return () => <h1>渲染函数---{count.value}</h1>;
  },
});
