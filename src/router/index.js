import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { parse } from "@/util/jwt"

Vue.use(VueRouter);

function checkTokenAndUserRole(to, from, next) {
  const sessionToken = window.sessionStorage.getItem('token')
  if (!sessionToken) {
    return next('/login')
  }
  const tokenPayload = parse(sessionToken)
  console.log(tokenPayload)
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/private",
    name: "Private",
    beforeEnter: checkTokenAndUserRole,
    component: () => import("../views/Private.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
