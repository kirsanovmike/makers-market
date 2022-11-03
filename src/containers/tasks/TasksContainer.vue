<template>
  <v-container class="px-8 py-12" fluid>
    <h1>Task manager</h1>
    <div class="d-flex">
      <v-responsive class="mx-auto" max-width="344">
        <pre>
          {{ newTask }}
        </pre>
        <v-text-field
          v-model="newTask"
          clearable
          variant="outlined"
          hide-details="auto"
          label="New task"
        >
          <template #append>
            <v-btn variant="contained" color="primary">
              <span class="info--text" @click="addNewTask"> Add </span>
            </v-btn>
          </template>
        </v-text-field>
      </v-responsive>
    </div>
    <task-item v-for="task in tasks" :key="task.id" :item="task" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import { Task } from "../../core/models/Task/Task";

export default defineComponent({
  name: "TasksContainer",
  data() {
    return {
      newTask: "",
    };
  },
  computed: {
    ...mapGetters("tasks", { tasks: "getTasks" }),
  },
  methods: {
    ...mapActions("tasks", ["addTask"]),
    clearTask() {
      this.newTask = "";
    },
    addNewTask() {
      const newTask = new Task({ text: this.newTask, id: new Date().getTime(), createTime: new Date()}
      this.addTask(newTask);
      this.clearTask();
    },
  },
});
</script>
