import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Message from "./components/Message.vue";
import News from "./components/News.vue";

const router = createRouter({
  routes: [
    {
      path: "/dialog",
      component: Message,
      name: "dialog",
    },
    {
      path: "/",
      component: News,
      name: "News",
    },
  ],
  history: createWebHistory(),
});
const app = createApp(App);
app.use(router);
app.mount("#app");
