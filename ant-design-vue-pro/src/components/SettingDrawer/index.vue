<template>
  <div>
    <!-- <a-button type="primary" @click="showDrawer">
      Open
    </a-button> -->
    <a-drawer
      placement="right"
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
    >
      <template v-slot:handle>
        <!-- 需要在样式中定义位置及展示 -->
        <div class="handle">
          <a-icon
            :type="visible ? 'close' : 'setting'"
            @click="visible = !visible"
          ></a-icon>
        </div>
      </template>
      <div>
        <h2>整体风格定制</h2>
        <a-radio-group
          :value="$route.query.navTheme || 'dark'"
          @change="e => handleSettingChange('navTheme', e.target.value)"
        >
          <a-radio value="dark"> 黑色 </a-radio>
          <a-radio value="light"> 白色 </a-radio>
        </a-radio-group>
        <h2>导航模式</h2>
        <a-radio-group
          :value="$route.query.navLayout || 'left'"
          @change="e => handleSettingChange('navLayout', e.target.value)"
        >
          <a-radio value="left"> 左侧 </a-radio>
          <a-radio value="top"> 顶部 </a-radio>
        </a-radio-group>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    onClose() {
      this.visible = false;
    },
    handleSettingChange(type, value) {
      // 将变化同步到路由请求query
      this.$router.push({ query: { ...this.$route.query, [type]: value } });
    },
  },
};
</script>
<style scoped>
.handle {
  position: absolute;
  top: 240px;
  right: 300px;
  width: 48px;
  height: 48px;
  background-color: lightblue;
  color: white;
  font-size: 20px;
  text-align: center;
  line-height: 48px;
  border-radius: 5px 0 0 5px;
}
</style>
