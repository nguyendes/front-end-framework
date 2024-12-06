import { createRouter, createWebHistory } from "vue-router";
import login from "../components/Login.vue";
import MainContent from "../components/maincontent.vue";
import ThongTinCaNhan from "../components/thongtincanhan.vue";

const routes = [
  {
    path: "/main",
    name: "MainContent",
    component: MainContent,
  },
  {
    path: "/profile",
    name: "ThongTinCaNhan",
    component: ThongTinCaNhan,
  },
  {
    path: "/",
    name: "Login",
    component: login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
