import { createRouter, createWebHistory } from "vue-router";


import TodosView from "../views/TodosView.vue";
import NotfoundView from "../views/404View.vue";
//import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // default route, dont need to lazy load
      path: "/",
      name: "home",
      component: TodosView,
    },
    {
        path:"/about",
        name: "about",
        // route level code-splitting
        //this generates a separate chunk (About.[hash].js) which is lazy-loadded when the route is visited
        // improve performance of the application 
        //component: AboutView,
        component: ()=> import("../views/AboutView.vue"),
    },
    {
      path: "/:catchall(.*)*",
      name: "Notfound",
      component: NotfoundView,
    },
  ],
});

export default router;
