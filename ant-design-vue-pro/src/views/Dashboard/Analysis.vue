<template>
  <div>
    <Chart :option="chartOption" style="height: 400px" />
  </div>
</template>

<script>
import Chart from "../../components/Chart";
// import random from "lodash/random";
import request from "../../utils/request";
// import axios from "axios";
export default {
  components: {
    Chart,
  },
  data() {
    return {
      chartOption: {},
    };
  },
  // 每3秒触发一次数据更改。
  mounted() {
    this.getChartData();
    this.interval = setInterval(() => {
      this.getChartData();
      // this.chartOption.series[0].data = this.chartOption.series[0].data.map(
      //   () => random(100)
      // );
      // 当没有深度监听时调用
      this.chartOption = { ...this.chartOption };
    }, 3000);
  },
  methods: {
    getChartData() {
      request({
        url: "/api/dashboard/chart",
        methods: "get",
        params: { ID: 12345 },
      })
        // get的同时传递参数，当参数返回调用then
        // axios
        //   .get("/api/dashboard/chart", { params: { ID: 12345 } })
        .then(response => {
          this.chartOption = {
            title: {
              text: "ECharts 入门示例",
            },
            tooltip: {},
            xAxis: {
              data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
            },
            yAxis: {},
            series: [
              {
                name: "销量",
                type: "bar",
                data: response.data,
              },
            ],
          };
        });
    },
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style></style>
