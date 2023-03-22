// 管理 home 中所有的数据源
import request from "@/utils/request";
import { defineStore } from "pinia";
import { TRes, TBanner } from "@/types/cate";
import { banner, bodyList } from "./static/homebanner";
let useHomeStore = defineStore("home", {
  state: () => ({
    // 轮播图的数据源
    bannerList: [] as TBanner[],
    homebodyList: [] as TBanner[],
  }),
  actions: {
    // 获取轮播图数据源
    async getBannerList() {
      //   let res = await request.get<TRes<TBanner[]>>("/home/banner");
      //   this.bannerList = res.data.result;
      if (this.bannerList[0]?.id) return;
      setTimeout(() => {
        this.bannerList = banner;
      }, 1000);
    },
    async getHomebodyList() {
      if (this.homebodyList[0]?.id) return;
      setTimeout(() => {
        this.homebodyList = bodyList;
      }, 1000);
    },
  },
  getters: {},
});
export default useHomeStore;
