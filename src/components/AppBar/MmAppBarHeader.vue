<template>
  <div class="px-4 mt-n2 d-flex justify-space-between align-center">
    <h1 class="text-h2 primary--text my-0">
      {{ TITLE }}
    </h1>
    <p class="info--text text--lighten-1">Please, add your daily tasks</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      TITLE: "Makers Market",
    };
  },
});
</script>
