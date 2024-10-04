<template>
  <div id="map-container" style="height: 500px;"></div>
</template>

<script>
import { initializeMap, drawPolyline } from '../services/amapService'

export default {
  props: {
    trajectory: {
      type: Array,
      required: true
    }
  },
  mounted() {
    const map = initializeMap('map-container')

    const trajectoryPath = this.trajectory.map(point => [point.lon, point.lat])

    // 使用高德API在地图上绘制用户的历史轨迹
    drawPolyline(map, trajectoryPath)
  }
}
</script>
