import Vue from 'vue'
import App from './App.vue'
// 全局注册组件
// import TodoItem from './components/TodoItem.vue'

// Vue.component('todo-list', TodoList)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
