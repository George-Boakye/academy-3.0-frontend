import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import userRoutes from "./user";
import adminRoutes from "./admin"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  ...userRoutes,
  ...adminRoutes
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
