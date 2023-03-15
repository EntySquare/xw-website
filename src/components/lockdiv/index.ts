//注册全局组件
import LockDiv from "@/components/lockdiv/index.vue";

//默认导出
export default {
  install(Vue: any) {
    Vue.component("LockDiv", LockDiv);
  },
};
