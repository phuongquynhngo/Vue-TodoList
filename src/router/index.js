import { createRouter, createWebHistory } from "vue-router";


import TodosView from "../views/TodosView.vue";
import NotfoundView from "../views/404View.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: TodosView,
    },
    {
        path:"/about",
        name: "about",
        component: AboutView,
    },
    {
      path: "/:catchall(.*)*",
      name: "Notfound",
      component: NotfoundView,
    },
  ],
});

export default router;
