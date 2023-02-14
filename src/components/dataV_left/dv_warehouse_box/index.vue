<template>
  <!-- 仓库库存量 -->
  <dv-border-box-1 style="width:100%;height:200px;">
    <span style="display: inline-block; margin-top:20px;margin-left: 30px;margin-bottom: 0px;">仓库库存量</span>
    <!-- 音波装饰 -->
    <dv-decoration-6 style="width:100px;height:10px;margin-left: 30px;" />
    <dv-capsule-chart :config="config5" style="width: 90%;height: 70%;margin-left: 20px;" />
  </dv-border-box-1>
</template>

<script>
export default {
  name: 'dv_warehouse_box',
  data () {
    return {
      // 仓库库存量
      config5: {
        data: [
          {
            name: '南阳',
            value: 167
          },
          {
            name: '周口',
            value: 123
          },
          {
            name: '漯河',
            value: 98
          },
          {
            name: '郑州',
            value: 75
          },
          {
            name: '西峡',
            value: 66
          },
        ],
        colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
        unit: '单位'
      },
    }
  }
}
</script>

<style>
</style>