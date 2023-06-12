import { get, post, put, remove } from "@/utils/request";

// 专辑NFT详情数据
export const artifactById = (data) => {
  return post("/web/artifact/artifactById", data, 1);
};

//【NFT详情】此专辑推荐列表
export const albumRecommend = (data) => {
  return post("/web/artifact/albumRecommend", data, 1);
};

// 专辑详情
export const albumInfo = (data) => {
  return post("/web/album/albumInfo", data, 1);
};

// 【专辑详情】下半 专辑的nft查询
export const albumByArtifact = (data) => {
  return post("/web/album/albumByArtifact", data, 1);
};
