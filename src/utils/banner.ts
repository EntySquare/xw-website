const type = (i: number, l: number) => {
  let num = l % i ? Math.floor(l / i) + 1 : Math.floor(l / i);
  return num;
};

export { type };
