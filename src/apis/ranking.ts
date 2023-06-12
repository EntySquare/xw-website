import { get, post, put, remove } from "@/utils/request";

// TOP排行专辑
export const topAll = (data) => {
  return post("/web/market/topAll", data, 1);
};
