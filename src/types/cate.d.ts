// 定义类型
export type TBanner = {
  id: number;
  collect: number;
  name: string;
  lowest_price: string;
  img: string[];
  locking_time: number;
  opening_time: number;
};
// 定义类型
export type TRes<T> = {
  result: T;
};
