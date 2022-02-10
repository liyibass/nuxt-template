<template>
  <dashboard />
</template>

<script lang="ts">
import Vue from 'vue'
import Dashboard from '~/components/Dashboard.vue'
import MainDiagram from '~/components/MainDiagram.vue'

export default Vue.extend({
  components: { MainDiagram, Dashboard },
  name: 'IndexPage',
})
</script>

<style lang="scss" scoped></style>
