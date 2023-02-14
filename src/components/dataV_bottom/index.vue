<template>
  <div class="module_box">
    <div style="flex: 0 1 50%;">
      <dv-border-box-8 style="width:100%;height:200px">
        <!-- 折线图 -->
        <lineEcharts :typeCharts="'line'"></lineEcharts>
      </dv-border-box-8>
    </div>
    <div style="flex: 0 1 25%;">
      <dv-border-box-8 style="width:100%;height:200px">
        <!-- 饼状环形动态图 -->
        <apacheEcharts></apacheEcharts>
      </dv-border-box-8>
    </div>
    <div style="flex: 0 1 25%;">
      <dv-border-box-8 style="width:100%;height:200px">
        <dv-scroll-ranking-board :config="config22" style="width:90%;height:99%;margin-left: 10px;" />
      </dv-border-box-8>
    </div>
  </div>
</template>

<script>
import lineEcharts from '@/views/lineEcharts'
import apacheEcharts from '@/views/apacheEcharts'
export default {
  name: 'dataV_bottom',
  components: { lineEcharts, apacheEcharts },
  data () {
    return {
      // 进度池
      config6: {
        value: 66,
        localGradient: true
      },
      config22: {
        data: [
          {
            name: '周口',
            value: 55
          },
          {
            name: '南阳',
            value: 120
          },
          {
            name: '西峡',
            value: 78
          },
          {
            name: '驻马店',
            value: 66
          },
          {
            name: '新乡',
            value: 80
          },
          {
            name: '信阳',
            value: 45
          },
          {
            name: '漯河',
            value: 29
          }
        ]
      }
    }
  }
}
</script>
  
<style>
</style>