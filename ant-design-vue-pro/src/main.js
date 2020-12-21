import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//使用less后编译报错
// import 'ant-design-vue/dist/antd.less';
// 引入部分样式
// 配置babel后可以不写样式引入
// import "ant-design-vue/lib/button/style";
// import Antd from "ant-design-vue";
// 引入部分组件
// import { Button } from "ant-design-vue/lib";
// 配置babel后可以直接这样写，简化按需加载。
import { Button, Layout, Icon, Drawer, Radio } from "ant-design-vue";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
