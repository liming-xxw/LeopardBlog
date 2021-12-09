import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import antv from "./plugins/antv";
import "./assets/scss/main.scss";

createApp(App).use(antv).use(store).use(router).mount("#app");
