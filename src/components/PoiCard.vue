<template>
  <div class="poi-card">
    <h3>{{ poi.name }}</h3>
    <p>Category: {{ poi.category }}</p>
    <p>Location: ({{ poi.lat }}, {{ poi.lon }})</p>
  </div>
</template>

<script>
export default {
  props: {
    poi: Object
  }
}
</script>

<style scoped>
.poi-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}
</style>
