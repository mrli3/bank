import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mode: "/api", // 服务类型 
    isHeight:false
  },
  mutations: {
    // 服务前缀标识
    changeMode(state, mode) {
      state.mode = mode
    },
    // ios底部略高
    changeBottomHeight(state, isHeight) {
      state.isHeight = isHeight;
    }
  },
  actions: {
  },
  modules: {
  }
})
