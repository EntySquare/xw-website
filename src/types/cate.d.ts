// 定义类型
export type TResult = {
  code: string;
  msg: string;
  result: TCate[];
};
export type TCate = {
  id: string;
  name: string;
  picture: string;
  children: TCate[];
  goods: TGoods[];
};
export type TGoods = {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount: null;
  orderNum: null;
};
