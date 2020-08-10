import Vue from "vue";
import VueRouter from "vue-router";
import Create from "../views/Create";
import NotFound from "../views/NotFound";

Vue.use(VueRouter);

const routes = [];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      component: NotFound,
    },
    {
      path: "/",
      name: "create",
      component: Create,
    },
    {
      path: "/list",
      name: "list",
      component: () => import("../views/List.vue"),
    },
    {
      path: "/task/:id",
      name: "task",
      component: () => import("../views/Task.vue"),
    },
  ],
});

export default router;
