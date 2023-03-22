// 定义类型
export type TBanner = {
  id: number;
  collect: number;
  name: string;
  lowest_price: string;
  countdown: number;
  img: string[];
};
// 定义类型
export type TRes<T> = {
  result: T;
};
