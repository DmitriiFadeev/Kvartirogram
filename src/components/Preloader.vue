<template>
  <div class="preloader">
    <img alt="loader" src="../assets/loader.gif">
  </div>
</template>

<script>
export default {
  name: "Preloader"
}
</script>

<style scoped lang="scss">
.preloader {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: #fff;
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center
}
</style>