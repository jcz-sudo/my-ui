<template>
  <!-- <button class="my-button" @click="$emit('click')">
    <slot>{{ text }}</slot>
  </button> -->
  <el-button type="primary" plain><slot></slot></el-button>
  <span class="red">2333</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MyButton',
  props: {
    text: {
      type: String,
    },
  },
  emits: ['click'],
});
</script>

<style lang="scss" scoped>
// @use '~/styles/element/index.scss' as *;
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
