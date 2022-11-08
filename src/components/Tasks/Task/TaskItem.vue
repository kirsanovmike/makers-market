<template>
  <div class="d-flex align-center justify-space-between task-item">
    <div class="d-flex">
      <p class="info--text text-body-1 mb-0">
        Date: {{ item.createTime }}
      </p>
      <p class="primary--text text-body-1 mb-0 ml-8">
        {{ item.text }}
      </p>
    </div>
    <v-btn class="ml-2" color="primary" @click="deleteItem"> Delete </v-btn>
  </div>
</template>

<script lang="ts">
// vuex
import { mapActions } from "vuex";
// services
import { setLocalStorageItem } from "../../../services/common/app-storage";
// models
import { Task } from "../../../core/models/Task/Task";

export default {
  name: "TaskItem",
  props: {
    item: {
      type: Task,
      default() {
        return {};
      },
    },
  },
  methods: {
    ...mapActions("tasks", ["deleteTaskById", "updateLocalStorageTasksList"]),

    setLocalStorageItem,

    /* Delete item and update localStorage. */
    deleteItem() {
      this.deleteTaskById(this.item.id);
      this.updateLocalStorageTasksList();
    },
  },
};
</script>

<style lang="scss" scoped>
.task-item {
  max-width: 1000px;
}
</style>
