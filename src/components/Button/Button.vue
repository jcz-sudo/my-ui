<template>
  <button class="my-button" @click="$emit('click')">
    <slot>{{ text }}</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MyButton",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  emits: ["click"],
});
</script>

<style>
.my-button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.my-button:hover {
  background-color: #3aa875;
}
</style>
