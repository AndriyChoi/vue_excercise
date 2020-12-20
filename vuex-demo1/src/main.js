import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store(
  {
    state:{
      count: 0,
    },
    mutations: {
      increment(state, n){
        state.count += n
      }
    },
    // 必须交由mutations执行
    actions: {
      increment({commit}, n) {
        setTimeout(
          ()=>{
            commit('increment', n)
          }, 3000
        )
      }
    },
    // 缓存效果，计算属性
    getters: {
      doubleCount(state) {
        return state.count * 2
      }
    }
  }
)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
