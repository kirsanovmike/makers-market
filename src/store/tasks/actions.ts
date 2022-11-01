import { ActionTree } from "vuex";
import { ProfileState, SettingPayload, Task } from "./types";
import { RootState } from "../types";

export const actions: ActionTree<ProfileState, RootState> = {
  /* Main setting action. */
  setData({ commit }, payload: SettingPayload): any {
    commit("SET_DATA", payload);
  },
  /* Add task. */
  addTask({ commit }, task: Task) {
    commit("ADD_TASK", task);
  },
  /* Delete task. */
  deleteTaskById({ commit }, id: String) {
    commit("DELETE_TASK_BY_ID", id);
  },
  /* Clear all tasks. */
  clearTasks({ commit }) {
    commit("CLEAR_TASKS");
  },
};
