import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/HomePage.vue";
import SignUp from "@/components/User/UserAuthentication/SignUp.vue";
import SignIn from "@/components/User/UserAuthentication/SignIn";
import Admin from "@/components/User/Admin/Admin.vue";
import Manager from "@/components/User/Manager/Manager.vue";
import CreateMatch from "@/components/Match/CreateMatch.vue";
import MatchCard from "@/components/UI/MatchCard.vue";
import CreateStadium from "@/components/Stadium/CreateStadium.vue";
import EditMatch from "@/components/Match/EditMatch.vue";
import Fan from "@/components/User/Fan/Fan.vue";
import EditDataUser from "@/components/User/Fan/EditDataUser.vue";

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
  {
    path: "/matchCard",
    name: "matchcard",
    component: MatchCard,
  },
  {
    path: "/createstadium",
    name: "createstadium",
    component: CreateStadium,
  },
  {
    path: "/editmatch",
    name: "editmatch",
    component: EditMatch,
    props: true,
  },
  {
    path: "/fan",
    name: "fanfan",
    component: Fan,
  },
  {
    path: "/editdatauser",
    name: "EditDataUser",
    component: EditDataUser,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
