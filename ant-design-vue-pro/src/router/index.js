import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import RenderRouterView from "../components/RenderRouterView";

Vue.use(VueRouter);

// 这种嵌套的方式有利于拓展功能。
const routes = [
  {
    path: "/user",
    // 简单方法，不需要利用新的组件去挂载到APP.vue的对应节点
    // component: { render: h => h("router-view") },
    // component: RenderRouterView,
    // 利用布局组件进行渲染
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/UserLayout"),
    children: [
      {
        path: "/path",
        redirect : "/user/login"
      },
      {
        path: "/user/login",
        name: "login",
        // webpackChunkName 设置打包名称。
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Login")
      },
      {
        path: "/user/register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Register")
      }
    ]
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
