import Vue from "vue";
import Router from "vue-router";
const Home = require("@/components/Home").default;
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});
