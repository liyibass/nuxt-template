<template>
  <div class="header" v-on:click="clickHandler">
    <Logo />
  </div>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo,
  },
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
}
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
}
</style>
