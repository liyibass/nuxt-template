<template>
  <div class="header" v-on:click="clickHandler">
    <logo />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from './Logo.vue'

export default Vue.extend({
  components: { Logo },
  data() {
    return {
      name: 'liyi',
    }
  },
  methods: {
    clickHandler() {
      this.$store.dispatch('NAVBAR_TOGGLE')
    },
  },
  computed: {
    navStatus() {
      return this.$store.state.isNavbarOn
    },
  },
})
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
}
</style>
