<template>
  <div class="nav">
    <router-link to="/" class="home">
      <img src="../assets/letterm.png" height="40" width="40" />
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
    padding: 3px;
    border-radius: 50%;
    border: outset 2px #aa8817;

    &:hover {
      transition: 0.2s;
      opacity: 0.6;
    }
  }
}
</style>