import { createStore } from "vuex";
import { tasks } from "./tasks";

export default createStore({
  state: {
    version: "1.0.0", // a simple property
  },
  modules: {
    tasks,
  },
  mutations: {},
  actions: {},
});
