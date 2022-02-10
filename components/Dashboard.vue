<template>
  <div class="dashboard">
    <main-diagram />
  </div>
</template>

<script>
import MainDiagram from './MainDiagram.vue'
export default {
  components: { MainDiagram },
}
</script>

<style lang="scss" scoped>
.dashboard {
  background: $dashboardBackground;
  padding: 10px;
  border-radius: 10px;

  width: calc(100vw - 20px);
  margin: auto;
}
</style>
