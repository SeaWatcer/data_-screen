<template>
  <div id="min" style="width: 100%;height:110%;"></div>
</template>

<script>
import *as echarts from 'echarts'
export default {
  name: 'lineEcharts',
  props: {
    typeCharts: {
      type: String,
      default: 'line'
    }
  },
  data () {
    return {

    }
  },
  mounted () {
    this.lineEcharts()
    // this.initWebsocket()
  },
  methods: {
    lineEcharts () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('min'));

      // 指定图表的配置项和数据
      var option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: this.typeCharts,
            smooth: true
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    // 客户端与服务端连接
    // initWebsocket () {
    //   const ws = new WebSocket('ws://127.0.0.1:8090')
    //   console.log(ws)
    //   // 成功回调
    //   ws.onopen = function () {
    //     alert('WebSocket连接成功')
    //   }
    //   // 错误回调
    //   ws.onerror = function () {
    //     alert('api接口失效失败')
    //   }
    //   // 接收消息
    //   ws.onmessage = function (msg) {
    //     alert(msg)
    //   }
    // }
  }
}
</script>

<style>
</style>