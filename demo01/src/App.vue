<template>
  <div id="app">
    <!-- 语法糖 -->
    <input v-model="message">
    <!-- 复杂方法 -->
    <input :value="message" @input="handleChange">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{message}} {{message + message}} 
        <div v-bind:id="message"></div>
        <!-- <div :id="message"></div> -->
        <todo-list>
          <!-- 此处key和虚拟DOM有关 -->
          <!-- 当列表变动，用index当成key就有问题。 -->
            <todo-item @delete="handleDelete" v-for="(item, index) in list" :key="index" :title="item.title" :del="item.del">
                <!-- 老版本语法
                    <span slot="pre-icon">前置图标</span>
                <span slot="suf-icon">后置图标</span> -->
                <!-- 新版本语法2.6 -->
                <!-- 插槽传值 -->
                <template v-slot:pre-icon="{value}" >
                    <span>前置图标{{value}}</span>
                </template>
                <!-- 把这个注释后可以有默认值
                    <template v-slot:suf-icon>
                    <span>前置图标</span>
                </template> -->
            </todo-item>
        </todo-list>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList.vue'
import TodoItem from './components/TodoItem.vue'
// 局部注册组建
export default {
  name: 'App',
  components: {
    HelloWorld,
    TodoItem,
    TodoList
  },
  data() {
    return {
      message: 'hello world',
      list:[{
          title: 'class1',
          del: false
      },
      {
          title: 'class2',
          del: true
      }
      ],
    }
  },
  methods: {
    handleDelete(val) {
      console.log('handleDelete', val)
    },
    handleChange(e) {
      this.message = e.target.value
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
