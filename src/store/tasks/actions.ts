import { ActionTree } from "vuex";
import { ProfileState, SettingPayload, Task } from "./types";
import { RootState } from "../types";
import { setLocalStorageItem } from "../../services/common/app-storage";

export const actions: ActionTree<ProfileState, RootState> = {
  /* Setting tasks. */
  setTasksData({ commit }, payload: SettingPayload): any {
    commit("SET_TASKS_DATA", payload);
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
  /* Update LoaclStorage Tasks List. */
  updateLocalStorageTasksList({ state }) {
    setLocalStorageItem("tasksList", state.tasks);
  },
};
