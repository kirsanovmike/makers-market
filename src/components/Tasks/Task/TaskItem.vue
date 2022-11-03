<template>
  <div class="d-flex align-center justify-space-between">
    <p class="info--text text-body-1 mb-0">
      {{ item.text }}
    </p>
    <v-btn class="ml-2" icon="mdi-delete" color="primary" />
  </div>
</template>

<script lang="ts">
export default {
  name: "TaskItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
