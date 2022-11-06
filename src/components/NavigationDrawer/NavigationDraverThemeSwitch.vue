<template>
  <div class="pa-4 d-flex justify-space-between align-center">
    <v-switch
      v-model="$vuetify.theme.dark"
      label="Theme"
      color="blue"
      hide-details
    />
    <div>
      <p class="mb-0 info--text">CurrentTheme</p>
      <span class="font-weight-bold">
        {{ $vuetify.theme.dark ? "dark" : "light" }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavigationDraverThemeSwitch",
});
</script>
