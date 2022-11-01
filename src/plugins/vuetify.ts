import "../main.scss";
import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { light } from "../assets/themes/light/light";
import { dark } from "../assets/themes/dark/dark";

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: light,
};

const myCustomDarkTheme: ThemeDefinition = {
  dark: true,
  colors: dark,
};

const vuetify: any = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "myCustomLightTheme",
    dark: false,
    // defaultTheme: "myCustomDarkTheme",
    themes: {
      light: { ...myCustomLightTheme },
      dark: { ...myCustomDarkTheme },
    },
  },
});

export default vuetify;
