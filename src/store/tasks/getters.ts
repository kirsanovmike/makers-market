import { GetterTree } from "vuex";
import { ProfileState, Task } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<ProfileState, RootState> = {
  getTasks: (state): Array<Task> => state.tasks,
};
