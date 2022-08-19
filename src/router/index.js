import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import userRoutes from "./user";
import adminRoutes from "./admin"
// import jwt_decode from "jwt-decode";

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
  ...adminRoutes
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to) => {
//   const token = localStorage.getItem("token");
//   let isAuthenticated =  false;

//   if(token){
//     let decoded = jwt_decode(token)
//     // console.log(decoded)
//     const expirydate = new Date(decoded.exp * 1000)
//     const now = new Date()

//     if(now < expirydate ){
//      isAuthenticated = true
//     }
   
//   }
 
//   if (!to.meta.noAuth && !isAuthenticated) { 
//       return { name: "login" };
//   }
//   if (isAuthenticated && to.name === "login") {
//     return { name: "dashboard" };
//   }
//   return true;
// });

export default router;
