// 管理分类导航的数据
import { defineStore } from "pinia";
// 导入 axios
import { getTheme_value } from "@/utils/storage";
// 导入默认分类数据
import { topNavCategory } from "../constants";
// 将默认的分类数据转为对象
let defaultNav = topNavCategory.map((item) => {
  return {
    name: item,
  };
});

let useCateStore = defineStore("cate", {
  state: () => ({
    themenum: getTheme_value() || "1",
    // 头部分类数据
  }),
  actions: {
    // 获取头部分类数据
    setThemenum(i: string) {
      this.$state.themenum = i;
    },
    getThemenum() {
      return this.$state.themenum;
    },
  },
  getters: {},
});
export default useCateStore;
