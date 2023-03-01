// 管理分类导航的数据
import { defineStore } from 'pinia'
let useCateStore = defineStore('cate', {
  state: () => ({
    test: '我是测试数据'
  }),
  actions: {},
  getters: {}
})
export default useCateStore

