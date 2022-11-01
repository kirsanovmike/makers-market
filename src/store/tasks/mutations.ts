import { MutationTree } from "vuex";
import { ProfileState, Task } from "./types";

export const mutations: MutationTree<ProfileState> = {
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
