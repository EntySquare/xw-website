import { createApp } from "vue";
import ArcoVue from "@arco-design/web-vue";
import App from "./App.vue";
import "@arco-design/web-vue/dist/arco.css";
// 导入 normalize
import "normalize.css";
// 导入公共的样式文件
import "@/assets/styles/common.less";
// 导入路由
import router from "@/router";
// 导入 pinia
import { createPinia } from "pinia";
// 额外引入图标库
import ArcoVueIcon from "@arco-design/web-vue/es/icon";

import VueSplide from "@splidejs/vue-splide";

import plugin from "./components/index";

let pinia = createPinia();

const app = createApp(App);

app
  .use(router)
  .use(ArcoVue)
  .use(ArcoVueIcon)
  .use(VueSplide)
  .use(pinia)
  .use(plugin)
  .mount("#app");
