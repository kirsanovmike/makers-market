import { createApp } from "vue";
import { vuetify } from "./plugins";
import store from "./store";
import "vuetify/styles";
import App from "./App.vue";

createApp(App).use(store).use(vuetify).mount("#app");
