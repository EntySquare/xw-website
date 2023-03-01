// 管理路由
import { createRouter, createWebHashHistory } from "vue-router";
// 导入 加载条
import NProgress from "nprogress";
import "nprogress/nprogress.css";
// 导入 layout
import layout from "@/views/layout/index.vue";
let router = createRouter({
  // 设置路由模式
  history: createWebHashHistory(),
  // 设置路由对象
  routes: [
    { path: "/", redirect: "/layout" },
    { path: "/layout", component: layout },
    { path: "/login", component: () => import("@/views/login/index.vue") },
  ],
});
NProgress.configure({ showSpinner: false }); // 显示右上角螺旋加载提示
router.beforeEach((to, from, next) => {
  NProgress.start(); //开启进度条
  //中间写其他的项目中所需要的一些代码，例如有些网页只有登录了才能进，在这里可以做出判断，判断完了满足要求后就可以放行 next()
  next();
});

router.afterEach(() => {
  NProgress.done(); //完成进度条
});
// 暴露路由对象
export default router;
