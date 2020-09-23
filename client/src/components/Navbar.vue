<template>
  <div class="nav">
    <router-link to="/" class="home">
      <img src="../assets/cloud.gif" height="40" width="40" />
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  padding: 0 3rem;
  position: absolute;
  align-items: center;
  justify-content: space-between;
}
.home {
  img {
    border-radius: 50%;
    border: inset 1px #d3b9b9;
  }
}
</style>