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
let pinia = createPinia();

createApp(App).use(router).use(ArcoVue).use(pinia).mount("#app");
