<template>
  <div class="nav">
    <router-link to="/" class="home">
      <img src="../assets/cloud.gif" height="40" width="40" />
    </router-link>
    <nav>
      <router-link :to="{ name: 'meetup-create' }" class="create-text">Create meetup</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  z-index: 3;
  width: 100%;
  height: 60px;
  margin: 10px;
  display: flex;
  padding: 0 3rem;
  position: fixed;
  align-items: center;
  justify-content: space-between;

  .create-text {
    color: #fff;
    padding: 10px;
    transform: 2s;
    border-radius: 5px;
    letter-spacing: 1px;
    margin-right: 100px;
    text-decoration: none;
    background: #d3b9b9;
    &:hover {
      opacity: 0.7;
      transition: 0.5s;
      color: #d3b9b9;
      background: #fff;
      font-weight: bolder;
    }
  }
}

.home {
  img {
    border-radius: 50%;
    border: inset 1px #d3b9b9;
  }
}
</style>