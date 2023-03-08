import { nextTick } from "vue";
import useStore from "@/store/index";
let cate;
let setThemenum: any;
nextTick(() => {
  cate = useStore().cate;
  setThemenum = cate.setThemenum;
});
const Theme_value = "1";

const isTheme_value = () => {
  return Theme_value;
};

const getTheme_value = () => {
  return localStorage.getItem("Theme_value");
};

const setTheme_value = (Theme_value: string) => {
  localStorage.setItem("Theme_value", Theme_value);
};

const clearTheme_value = () => {
  localStorage.removeItem("Theme_value");
};

const setTheme = (value: string) => {
  setThemenum(value);
  if (+value) {
    // color = "blue";
    setTheme_value(value);
    document.body.removeAttribute("arco-theme");
    document.body.querySelector(".app-topnav")?.classList.remove("dark");
    document.body.classList.remove("dark");
  } else {
    // color = "white";
    setTheme_value(value);
    document.body.setAttribute("arco-theme", "dark");
    document.body.classList.add("dark");
    nextTick(() => {
      document.body.querySelector(".app-topnav")?.classList.add("dark");
    });
  }
};

export {
  isTheme_value,
  getTheme_value,
  setTheme_value,
  clearTheme_value,
  setTheme,
};
