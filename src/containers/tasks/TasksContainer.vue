<template>
  <v-container class="px-8 py-12" fluid>
    <h1>Task manager</h1>
    You have: {{ tasks.length }} tasks
    <div class="d-flex pt-8">
      <v-responsive class="mx-auto" max-width="394">
        <div class="d-flex align-start">
          <v-text-field
            v-model="newTask"
            clearable
            class="task-text-field"
            variant="outlined"
            placeholder="New task"
            label="New task"
            @keyup.enter="addNewTask"
          />
          <v-btn
            :disabled="newTask === '' || newTask == null"
            class="ml-2"
            :height="56"
            variant="contained"
            color="primary"
            @click="addNewTask"
          >
            <span class="info--text"> Add </span>
          </v-btn>
        </div>
      </v-responsive>
    </div>
    <div
      class="d-flex align-center justify-center pt-10"
      style="flex-direction: column"
    >
      <task-item
        v-for="(task, index) in tasks"
        :key="`${index}-${task.id}`"
        :item="task"
        class="px-10"
        :class="{ 'mb-6': index !== tasks.length - 1 }"
      />
    </div>
  </v-container>
</template>

<script lang="ts">
// libs
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
// services
import { getLocalStorageItem } from "../../services/common/app-storage";
// models
import { Task } from "../../core/models/Task/Task";
import { Guid } from "../../core/services/guid/Guid";
// components
import TaskItem from "../../components/Tasks/Task/TaskItem.vue";

export default defineComponent({
  name: "TasksContainer",
  components: { TaskItem },
  data() {
    return {
      newTask: "",
    };
  },
  computed: {
    ...mapGetters("tasks", { tasks: "getTasks" }),
  },
  created() {
    this.setTasksFromLocalStorage();
  },
  methods: {
    ...mapActions("tasks", [
      "setTasksData",
      "addTask",
      "updateLocalStorageTasksList",
    ]),

    getLocalStorageItem,

    /* Set tasks item from LocalStorage to store. */
    setTasksFromLocalStorage() {
      const tasks: string | null = getLocalStorageItem("tasksList");
      this.setTasksData(tasks != null ? JSON.parse(tasks) : []);
    },
    /* Clear newTask field. */
    clearTask() {
      this.newTask = "";
    },
    /* Add new task to store. */
    addNewTask() {
      if (this.newTask != null && this.newTask !== "") {
        const newTask = new Task({
          text: this.newTask,
          id: Guid.newGuid(),
          createTime: new Date().toLocaleString(),
        });
        this.addTask(newTask);

        this.clearTask();
        this.updateLocalStorageTasksList();
      }
    },
  },
});
</script>

<style lang="scss">
.task-text-field .v-field__field .v-field__input {
  width: 260px;
}
</style>
