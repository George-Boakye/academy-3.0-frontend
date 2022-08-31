import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import userRoutes from "./user";
import adminRoutes from "./admin";
import jwt_decode from "jwt-decode";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      noAuth: true,
    },
  },
  ...userRoutes,
  ...adminRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  let token = localStorage.getItem("token");
  let isAuthenticated = false;
  let decoded;
  let adminAuth = false;

  if (token) {
    decoded = jwt_decode(token);
    const expirydate = new Date(decoded.exp * 1000);
    const now = new Date();

    if (now < expirydate) {
      isAuthenticated = true;
    }
  }

  if (!to.meta.noAuth && !isAuthenticated) {
    return { name: "login" };
  }
  if (
    !to.meta.noAuth &&
    decoded.applied == false &&
    to.name !== "pre-dashboard"
  ) {
    return "/pre-dashboard";
  }
  if (isAuthenticated && decoded.applied && to.name === "pre-dashboard") {
    return { name: "dashboard" };
  }
  if (isAuthenticated && to.name === "login") {
    return { name: "dashboard" };
  }
  if (adminAuth && to.name === "admin-login") {
    return { name: "admin-dashboard" };
  }
  return true;
});

export default router;
