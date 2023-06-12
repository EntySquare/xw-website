import { get, post, put, remove } from "@/utils/request";

// 首页数据
export const indexlist = (params) => {
  return get("/api/shop/wx/user/getWeChatAppId", { params }, 1);
};
