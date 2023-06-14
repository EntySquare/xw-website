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
export type BodyItemList = {
  album_id: number;
  album_img: string;
  album_name: string;
  author_name: string;
  follow: Boolean;
  pay_size: number;
  region_price: string;
};
// 定义类型
export type TRes<T> = {
  result: T;
};
