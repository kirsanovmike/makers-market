<template>
  <v-app>
    <v-navigation-drawer app>
      <navigation-draver-theme-switch />
    </v-navigation-drawer>

    <v-app-bar app height="100">
      <mm-app-bar-header />
    </v-app-bar>

    <v-main>
      <tasks-container />
      <!-- <router-view /> -->
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// layout components
import MmAppBarHeader from "./components/AppBar/MmAppBarHeader.vue";
import NavigationDraverThemeSwitch from "./components/NavigationDrawer/NavigationDraverThemeSwitch.vue";
// containers
import TasksContainer from "./containers/tasks/TasksContainer.vue";

export default defineComponent({
  components: { MmAppBarHeader, NavigationDraverThemeSwitch, TasksContainer },
});
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
