import { get, post, put, remove } from "@/utils/request";

// 发送验证码
export const getPhone = (data) => {
  return post("/web/sendCode", data, 1);
};

// 注册
export const register = (data) => {
  return post("/web/register", data, 1);
};
