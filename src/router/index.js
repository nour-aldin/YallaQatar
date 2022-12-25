import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import SignUp from "@/components/UserManeger/SignUp.vue";
import SignIn from "@/components/UserManeger/SignIn.vue";
import Admin from "@/components/Pages/admin.vue";
import Manager from "@/components/Pages/Manager.vue";
import CreateMatch from "@/components/UI/ManagerCreateMatch.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/admin",
    name: "AdminPage",
    component: Admin,
  },
  {
    path: "/manager",
    name: "manager",
    component: Manager,
  },
  {
    path: "/creatematch",
    name: "creatematch",
    component: CreateMatch,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
