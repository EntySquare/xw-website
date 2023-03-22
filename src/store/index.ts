// 统一管理所有的 pinia store
import useCateStore from "./modules/category";
import useHomeStore from "./modules/home";
export default function useStore() {
  return {
    cate: useCateStore(),
    home: useHomeStore(),
  };
}
