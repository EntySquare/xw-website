// 统一管理所有的 pinia store
import useCateStore from "./modules/category";
export default function useStore() {
  return {
    cate: useCateStore(),
  };
}
