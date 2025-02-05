import { defineComponent } from 'vue';
import buttonStyle from "./button.module.scss"
console.log(buttonStyle)
export default defineComponent({
  name: 'MyButton',
  props: {
    text: {
      type: String,
      required: false,
    },
  },
  emits: ['click'],
  setup(props, { emit,slots }) {
    console.log(slots)
    const handleClick = () => {
      emit('click');
    };

    return () => (
      <button class={buttonStyle.myButton} onClick={handleClick}>
        {slots.default ? slots.default():props.text}
      </button>
    );
  },
});