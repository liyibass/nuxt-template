<template>
  <div class="logo">
    <img :src="require(`@/static/logo.png`)" alt="" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.logo {
  max-width: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
