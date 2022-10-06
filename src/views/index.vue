<template>
  <div class="app-container">{{ msg }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const msg = ref<string>('test')
</script>

<style lang="less" scoped></style>
