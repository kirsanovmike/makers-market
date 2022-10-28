<template>
  <v-app>
    <v-navigation-drawer app>
      <v-btn class="primary" @click="toggleTheme">toggle theme</v-btn>
    </v-navigation-drawer>

    <v-app-bar app height="100">
      <mm-app-bar-header />
    </v-app-bar>

    <v-main>
      <router-view />
      {{ $vuetify.theme.themes }}
      <div class="text-primary-lighten-1">text color</div>

      <div class="text-primary-darken-1">text color</div>

      <div class="text-primary-darken-2">text color</div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MmAppBarHeader from "./components/AppBar/MmAppBarHeader.vue";

export default defineComponent({
  components: { MmAppBarHeader },
  methods: {
    /* Refresh the theme. */
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
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
