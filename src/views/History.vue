<template>
  <div>
    <h2>用户历史轨迹</h2>
    <MapView :trajectory="userTrajectory" />
  </div>
</template>

<script>
import MapView from '../components/MapView.vue'
import { startLocationTracking, stopLocationTracking } from '../services/amapService'

export default {
  data() {
    return {
      userTrajectory: []  // 通过高德API采集到的轨迹数据
    }
  },
  mounted() {
    // 使用高德API开始采集轨迹数据
    startLocationTracking(this.updateTrajectory)
  },
  beforeUnmount() {
    // 停止高德API的定位跟踪
    stopLocationTracking()
  },
  methods: {
    updateTrajectory(newPosition) {
      // 更新轨迹数据，添加新的位置点
      this.userTrajectory.push(newPosition)
    }
  }
}
</script>
