<template>
  <div class="card">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.card {
  background: $background;
  padding: 10px;
  border-radius: 10px;
}
</style>
