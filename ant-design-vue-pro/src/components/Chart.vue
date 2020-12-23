<template>
  <div ref="chartDom"></div>
</template>

<script>
// 一个是添加事件，一个是移除事件。
import { addListener, removeListener } from "resize-detector";
import debounce from "lodash/debounce";
export default {
  props: {
    option: {
      type: Object,
      default: () => {},
    },
    // style会直接默认挂载到根节点，无需传递。
  },
  created() {
    // 可提升性能
    this.resize = debounce(this.resize, 300);
  },
  mounted() {
    this.renderChart();
    addListener(this.$refs.chartDom, this.resize);
  },
  beforeDestroy() {
    removeListener(this.$refs.chartDom, this.resize);
    this.chart.dispose();
    this.chart = null;
  },
  watch: {
    //   当个别值发生变化时，这个方法不会生效。
    // 此时需要在父组件主动更新option
    option(val) {
      this.chart.setOption(val);
    },
    // 需要深度监听
    // option: {
    //   handler(val) {
    //     this.chart.setOption(val);
    //   },
    //   deep: true,
    // },
  },
  methods: {
    //定义监听到变化时执行的方法，chart自带resize（）方法。
    resize() {
      console.log("resize");
      this.chart.resize();
    },
    renderChart() {
      var echarts = require("echarts");
      // 基于准备好的dom，初始化echarts实例
      this.chart = echarts.init(this.$refs.chartDom);
      this.chart.setOption(this.option);
    },
  },
};
</script>

<style></style>
