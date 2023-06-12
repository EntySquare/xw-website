import { get, post, put, remove } from "@/utils/request";

// 首页数据
export const getHomelist = (data) => {
  return post("/web/market", data, 1);
};
