import { MutationTree } from "vuex";
import { ProfileState, Task } from "./types";

export const mutations: MutationTree<ProfileState> = {
  /* Setting tasks. */
  SET_TASKS_DATA(state, newTasks: Array<Task>) {
    state.tasks = [...newTasks];
  },
  /* Add tasks to task list. */
  ADD_TASK(state, payload: Task) {
    state.tasks?.push(payload);
  },
  /* Delete task from tasklist by id. */
  DELETE_TASK_BY_ID(state, id: String) {
    state.tasks = state.tasks?.filter((task) => task.id !== id);
  },
  /* Clear all tasks. */
  CLEAR_TASKS(state) {
    state.tasks = [];
  },
};
