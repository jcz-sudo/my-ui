<template>
  <el-input v-bind="attrs"></el-input>
</template>

<script setup lang="ts" name="xInput">
import { useAttrs } from 'vue';
const attrs = useAttrs();
</script>

<style scoped></style>
