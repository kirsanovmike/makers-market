import "../main.scss";
import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#6200EE",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

const myCustomDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#1C1C1E",
    surface: "#1C1C1E",
    primary: "#7675D1",
    "primary-darken-1": "#5050BE",
    secondary: "#9A9ADA",
    "secondary-darken-1": "#8282D0",
    error: "#D75B4E",
    info: "#6B6B6C",
    success: "#22B14C",
    warning: "#F45827",
  },
};

const vuetify: Object = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      light: {...myCustomLightTheme},
      dark: {...myCustomDarkTheme},
    },
  },
});

export default vuetify;
