<template>
  <div class="navBar"></div>
</template>

<script>
export default {
  namme: "NavBar"
};
</script>

<style scoped>
.navBar {
  width: 100%;
  height: 70px;
  background: url("./../../../assets/img/navbar.png") no-repeat;
  background-position: center center;
  background-size: contain;
  position: fixed;
  top: -10px;
  left: 0;
  z-index: 10;
}
</style>
