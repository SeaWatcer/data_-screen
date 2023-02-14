<template>
  <!-- 水位图- -->
  <dv-border-box-10 style="width:100%;height:200px">
    <span style="margin: 15px 0 0px 25px; display: inline-block;">设备运转负载率</span>
    <dv-water-level-pond :config="config4" style="width:90%;height:80%;margin: auto;" />
  </dv-border-box-10>
</template>

<script>
export default {
  name: 'dv_border_box10',
  data () {
    return {
      // 水位图--设备运转负载率
      config4: {
        data: [66, 45],
        shape: 'roundRect',
        // colors: ['#fff', '#eff453']
      },
    }
  }
}
</script>

<style>
</style>