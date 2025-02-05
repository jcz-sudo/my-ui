import { defineComponent } from 'vue';

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
      <button class="my-button" onClick={handleClick}>
        {slots.default ? slots.default():props.text}
      </button>
    );
  },
});