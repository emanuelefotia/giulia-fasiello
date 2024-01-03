import { createVuetify } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { it } from "vuetify/locale";

export default defineNuxtPlugin((nuxtApp) => {
  const custom = {
    dark: false,
    colors: {
     
    },
  };
  const vuetify = createVuetify({
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
    ssr: false,
    components,
    directives,
    locale: {
      locale: "it",
      fallback: "it",
      messages: { it },
    },
    theme: {
      defaultTheme: "custom",
      themes: {
        custom,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
