<template>
  <div>
    <h2>Carpool Recommendations</h2>
    <div v-for="carpool in carpoolRecommendations" :key="carpool.user_id">
      <CarpoolCard :carpool="carpool" />
    </div>
  </div>
</template>

<script>
import {getCarpoolRecommendations} from '../services/recommendationService'

export default {
  data() {
    return {
      carpoolRecommendations: []
    }
  },
  async mounted() {
    const currentLocation = {lat: 39.9042, lon: 116.4074}
    const trajectoryId = 'some_trajectory_id'
    this.carpoolRecommendations = await getCarpoolRecommendations(trajectoryId, currentLocation)
  }
}
</script>
