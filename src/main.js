import { createMemoryHistory, createRouter } from "vue-router";

import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import SecondPage from "./SecondPage.vue";
import FormSample from "./components/FormSample.vue";

const routes = [
  { path: "/", component: FormSample },
  { path: "/second-page", component: SecondPage },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
