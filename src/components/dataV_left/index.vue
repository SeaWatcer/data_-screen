<template>
  <div class="module_box">
    <!-- 25% 左-->
    <div style="flex: 0 1 25%;">
      <!-- 设备耗能检测 -->
      <dv-border-box-13 style="width:100%;height:200px;padding-top: 10px;padding-left: 5px;">
        <!--echarts 柱状图 -->
        <barEchartseCharts></barEchartseCharts>
      </dv-border-box-13>
      <!-- 仓库库存量 -->
      <dv_warehouse_box></dv_warehouse_box>
      <!-- 水位图--设备运转负载量 -->
      <dv_border_box10></dv_border_box10>
    </div>

    <!-- 50% 中-->
    <div style="flex: 0 1 50%;">
      <!-- 飞线图 -->
      <dv-flyline-chart :config="config3" style="width:100%;height:100%;" />
    </div>

    <!-- 25% 右-->
    <div style="flex: 0 1 25%;">
      <!-- 销售速度排名 -->
      <dv-border-box-2 class="padingTop" style="width:100%;height:300px;">
        <div style="margin: 5px 0px 10px 20px;">销售速度排名</div>
        <dv-conical-column-chart :config="config2" style="width:100%;height:80%;" />
      </dv-border-box-2>
      <!-- 动态环图-- -->
      <dv-border-box-8 class="padingTop" style="width:100%;height:300px;">
        <!-- 动态环图  -->
        <div style="margin: 5px 0px 10px 20px;">动态环图</div>
        <dv-active-ring-chart :config="config7" style="width:100%;height:100%" />
      </dv-border-box-8>
    </div>
  </div>
</template>

<script>
import dv_warehouse_box from '@/components/dataV_left/dv_warehouse_box'
import dv_border_box10 from './dv_border_box10/index.vue'
import barEchartseCharts from '@/views/barEchartseCharts'
export default {
  name: 'dataV_left',
  components: { dv_border_box10, dv_warehouse_box, barEchartseCharts },
  data () {
    return {
      // 左上角胶囊
      config1: {
        data: [
          {
            name: '南阳',
            value: 167
          },
          {
            name: '周口',
            value: 67
          },
          {
            name: '漯河',
            value: 123
          },
          {
            name: '郑州',
            value: 55
          },
          {
            name: '西峡',
            value: 98
          }
        ]
      },
      // 右上角胶囊
      config2: {
        data: [
          {
            name: '周口',
            value: 55
          },
          {
            name: '南阳',
            value: 100
          },
          {
            name: '西峡',
            value: 71
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
            value: 35
          },
          {
            name: '漯河',
            value: 15
          }
        ],
        img: [
          require('@/assets/img/1st.png'),
          require('@/assets/img/2st.png'),
          require('@/assets/img/3st.png'),
          require('@/assets/img/4st.png'),
          require('@/assets/img/5st.png'),
          require('@/assets/img/6st.png'),
          require('@/assets/img/7st.png'),
        ]
      },
      // 飞线图
      config3: {
        centerPoint: [0.48, 0.35],
        points: [
          [0.52, 0.23],
          [0.43, 0.29],
          [0.59, 0.35],
          [0.53, 0.47],
          [0.45, 0.54],
          [0.36, 0.38],
          [0.62, 0.55],
          [0.56, 0.56],
          [0.37, 0.66],
          [0.55, 0.81],
          [0.55, 0.67],
          [0.37, 0.29],
          [0.20, 0.36],
          [0.76, 0.41],
          [0.59, 0.18],
          [0.68, 0.17],
          [0.59, 0.10]
        ],
        // bgImgUrl: require('../../assets/img/map.jpg')
        bgImgUrl: require('@/assets/img/map.jpg'),
        centerPointImg: {
          url: require('@/assets/img/mapCenterPoint.png')
        },
        pointsImg: {
          url: require('@/assets/img/mapPoint.png')
        },
        // 飞线颜色
        // flylineColor: '#C00000'
      },
      // 动态环图
      config7: {
        radius: '40%',
        activeRadius: '45%',
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
          }
        ],
        digitalFlopStyle: {
          fontSize: 20
        },
        showOriginValue: true,
        // 环半径
        radius: 100,
        // 环半径（动态）
        activeRadius: 110
      },
    }
  },
}
</script>

<style lang="less">
.padingTop {
  padding-top: 10px;
}
</style>