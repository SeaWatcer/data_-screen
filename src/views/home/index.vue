<template>
  <div class="home">
    <!-- 全局容器 -->
    <dv-full-screen-container style="padding-top:0px;">
      <!-- 中间标头装饰 -->
      <div style="display: flex;justify-content: space-between;">
        <!-- 👈 -->
        <dv-decoration-10 style="width:25%;height:5px;" />
        <!-- 中 -->
        <div style="display: flex;justify-content: space-around;width: 50%;position: relative;">
          <dv-decoration-8 style="height:50px;" />
          <div style="position: absolute;font-size: 16px;">智慧工厂数据中心</div>
          <dv-decoration-5 style="height:40px;margin-top: 17px;" />"
          <dv-decoration-8 :reverse="true" style="height:50px;" />
        </div>

        <!-- 👉 -->
        <dv-decoration-10 style="width:25%;height:5px;transform: rotateY(180deg);" />
      </div>
      <!-- 第一行 左-中-右 -->
      <dataV_left></dataV_left>
      <!-- flex布局 第二行-->
      <dataV_bottom></dataV_bottom>
    </dv-full-screen-container>
  </div>
</template>

<script>
import dataV_left from '@/components/dataV_left' // 引入第一行 左-中-右
import dataV_bottom from '@/components/dataV_bottom' // 引入第二行
export default {
  name: 'home',
  components: { dataV_left, dataV_bottom },
  data () {
    return {

    }
  },
}
</script>

<style lang="less">
.home {
  color: #fff;
  background: url(@/assets/img/pageBg.png) no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  // 对齐方式
  .module_box {
    display: flex;
    justify-content: space-between; // 两端对齐
    margin: 5px;
  }
}
</style>