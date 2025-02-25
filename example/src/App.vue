<script setup lang="ts">
import { ref } from 'vue';

const inputVal = ref('');
</script>

<template>
  <x-button>qqqq</x-button>
  <x-input v-model="inputVal" placeholder="请输入1111"></x-input>
  <x-form></x-form>
</template>

<style scoped></style>
