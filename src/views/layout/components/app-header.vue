<script lang="ts" setup>
import { ref } from "vue";
const value = ref("");
let color = "blue";
function setTheme() {
  if (+value.value) {
    color = "blue";
    document.body.removeAttribute("arco-theme");
    document.body.querySelector(".app-topnav")?.classList.remove("dark");
    document.body.classList.remove("dark");
  } else {
    color = "white";
    document.body.setAttribute("arco-theme", "dark");
    document.body.classList.add("dark");
    document.body.querySelector(".app-topnav")?.classList.add("dark");
  }
}
</script>
<script lang="ts">
export default { name: "AppHeader" };
</script>
<template>
  <header class="app-header">
    <div class="container">
      <div class="tab-ber" :style="{ '--color': color }">
        <RouterLink to="/">
          <a-typography-title
            :heading="6"
            :class="{ active1: !$route.params.id }"
          >
            全部</a-typography-title
          >
        </RouterLink>
        <RouterLink :to="`/category/${'类别2'}`">
          <a-typography-title
            :heading="6"
            :class="{ active1: $route.params.id == '类别2' }"
          >
            类别2</a-typography-title
          >
        </RouterLink>
        <RouterLink :to="`/category/${'类别3'}`">
          <a-typography-title
            :heading="6"
            :class="{ active1: $route.params.id == '类别3' }"
          >
            类别3</a-typography-title
          >
        </RouterLink>
        <RouterLink :to="`/category/${'类别4'}`">
          <a-typography-title
            :heading="6"
            :class="{ active1: $route.params.id == '类别4' }"
          >
            类别4</a-typography-title
          >
        </RouterLink>
      </div>
      <div class="themer">
        <a-typography-title :heading="6">
          切换{{ +value ? "夜间" : "白昼" }}模式
        </a-typography-title>
        <a-switch
          checked-color="#ff0909"
          unchecked-color="#000"
          v-model="value"
          checked-value="0"
          unchecked-value="1"
          @change="setTheme"
        >
          <template #checked-icon>
            <icon-moon-fill style="color: #f00" />
          </template>
          <template #unchecked-icon>
            <icon-sun-fill style="color: #000" />
          </template>
        </a-switch>
      </div>
    </div>
  </header>
</template>

<style scoped lang="less">
.color1 {
  color: white !important;
}
.app-header {
  height: 33px;
  margin-top: 25px;

  .container {
    width: 1512px;
    height: 33px;
    padding: 0 70px 0 82px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .tab-ber {
      display: flex;
      gap: 15px;
      h6 {
        height: 35px;
        width: 60px;
        font-size: 20px;
        font-weight: 700;
        line-height: 35px;
        text-align: center;
      }
      .active1 {
        background: rgb(var(--arcoblue-1));
        color: var(--color);
        border-radius: 8px;
      }
    }
    .themer {
      display: flex;
      gap: 16px;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
