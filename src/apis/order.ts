import { get, post, put, remove } from "@/utils/request";

// 查询订单
export const getOrder = (data) => {
  return post("/web/order/getOrder", data, 1);
};

// 创建NFT订单
export const createOrder = (data) => {
  return post("/web/order/createOrder", data, 1);
};
