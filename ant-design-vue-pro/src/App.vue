<template>
  <div id="app">
    <a-button>按钮</a-button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- 用于挂载router中的内容。 -->
    <router-view />
  </div>
</template>

<style lang="less">

</style>
