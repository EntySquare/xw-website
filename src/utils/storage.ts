import { nextTick } from "vue";
import useStore from "@/store/index";
import router from "@/router";
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
  // document.getElementById("app")!.style.transition = `all .3s`;
  document.getElementById("app")!.style.paddingTop = `85px`;
  nextTick(() => {
    // document.getElementById("app-topnav")!.style.transition = `all .3s`;
  });
  setThemenum(value);
  if (+value) {
    // color = "blue";var(--bgc-top)
    setTheme_value(value);
    document.body.removeAttribute("arco-theme");
    document.getElementById("app")!.style.background = "#F0EBF2";
    nextTick(() => {
      if (
        !router.currentRoute.value.params.id &&
        document.documentElement.scrollTop < 35
      ) {
        document.getElementById("app-topnav")!.style.background = "transparent";
      } else {
        document.getElementById("app-topnav")!.style.background = "#F0EBF2";
      }
    });
    // document.body.classList.remove("dark");
  } else {
    // color = "white";
    setTheme_value(value);
    document.getElementById("app")!.style.background = "#000";
    document.body.setAttribute("arco-theme", "dark");
    // document.body.classList.add("dark");
    nextTick(() => {
      if (
        !router.currentRoute.value.params.id &&
        document.documentElement.scrollTop < 35
      ) {
        document.getElementById("app-topnav")!.style.background = "transparent";
      } else {
        document.getElementById("app-topnav")!.style.background = "#000";
      }
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
