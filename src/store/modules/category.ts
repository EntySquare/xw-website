// 管理分类导航的数据
import { defineStore } from "pinia";
// 导入 axios
import request from "@/utils/request";
import { TResult, TCate } from "@/types/cate";
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
    test: "我是测试数据",
    // 头部分类数据
    cateList: defaultNav as TCate[],
  }),
  actions: {
    // 获取头部分类数据
    async getCateList() {
      let res = await request.get<TResult>("/home/category/head");
      // 保存数据源
      this.cateList = res.data.result;
    },
  },
  getters: {},
});
export default useCateStore;
