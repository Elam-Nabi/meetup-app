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
    margin-right: 100px;
    padding: 10px;
    text-decoration: none;
    color: #fff;
    letter-spacing: 1px;
    background: #d3b9b9;
    border-radius: 5px;
    transform: 2s;
    &:hover {
      background: #fff;
      color: #d3b9b9;
      font-weight: bolder;
      transition: 0.5s;
      opacity: 0.7;
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