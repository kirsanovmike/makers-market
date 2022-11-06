import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { ProfileState } from "./types";
import { RootState } from "../types";

export const state: ProfileState = {
  tasks: [],
  error: false,
};

const namespaced: boolean = true;

export const tasks: Module<ProfileState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
