<template>
  <div id="main" style="width: 100%;height:100%;"></div>
</template>

<script>
import *as echarts from 'echarts'
export default {
  name: 'barEchartseCharts',
  data () {
    return {

    }
  },
  mounted () {
    this.barEcharts()
  },
  methods: {
    barEcharts () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'));
      const data = [];
      for (let i = 0; i < 5; ++i) {
        data.push(Math.round(Math.random() * 200));
      }
      // 指定图表的配置项和数据
      var option = {
        xAxis: {
          max: 'dataMax'
        },
        yAxis: {
          type: 'category',
          data: ['A', 'B', 'C', 'D', 'E'],
          inverse: true,
          animationDuration: 300,
          animationDurationUpdate: 300,
          max: 2 // only the largest 3 bars will be displayed
        },
        series: [
          {
            realtimeSort: true,
            name: 'X',
            type: 'bar',
            data: data,
            label: {
              show: true,
              position: 'right',
              valueAnimation: true
            }
          }
        ],
        legend: {
          show: true
        },
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
      };
      function run () {
        for (var i = 0; i < data.length; ++i) {
          if (Math.random() > 0.9) {
            data[i] += Math.round(Math.random() * 2000);
          } else {
            data[i] += Math.round(Math.random() * 200);
          }
        }
        myChart.setOption({
          series: [
            {
              type: 'bar',
              data
            }
          ]
        });
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      setTimeout(function () {
        run();
      }, 0);
      setInterval(function () {
        run();
      }, 3000);
    }
  }
}
</script>

<style>
</style>