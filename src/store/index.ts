
import Vue from "vue";
import Vuex from "vuex";
import { RootState } from "./types";
import tasks from "./tasks/tasks";

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    version: "1.0.0", // a simple property
  },
  modules: {
    tasks,
  },
  mutations: {},
  actions: {},
});
