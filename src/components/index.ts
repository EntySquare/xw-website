// 管理所有的全局组件
import { App } from "vue";
import XtxSkeleton from "./skeleton/index.vue";
import DropDown from "./dropdownbox/index.vue";
import DropItem from "./dropboxItem/index.vue";
// 将全局组件封装到插件中
export default {
  install(Vue: App) {
    // 全局注册组件
    Vue.component("XtxSkeleton", XtxSkeleton);
    Vue.component("DropDown", DropDown);
    Vue.component("DropItem", DropItem);
  },
};
