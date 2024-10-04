<template>
  <div>
    <MapView />
    <div v-for="poi in poiRecommendations" :key="poi.name">
      <PoiCard :poi="poi" />
    </div>
  </div>
</template>

<script>
import {getPoiRecommendations} from '../services/recommendationService'

export default {
  data() {
    return {
      poiRecommendations: []
    }
  },
  async mounted() {
    const currentLocation = {lat: 39.9042, lon: 116.4074}
    this.poiRecommendations = await getPoiRecommendations(currentLocation)
  }
}
</script>
