import { get, post, put, remove } from "@/utils/request";

// 我的钱包
export const myWallet = (data) => {
  return post("/web/wallet/my", data, 1);
};

// 【我的】下半 持有的nft查询
export const myArtifact = (data) => {
  return post("/web/user/myArtifact", data, 1);
};

// 【我的】页面数据
export const myInfo = (data) => {
  return post("/web/user/myInfo", data, 1);
};
