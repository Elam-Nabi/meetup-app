<template>
  <header
    class="header-pic"
    :style="{
      backgroundImage: `url(${require('../assets/firstpagepic.jpg')})`,
    }"
  >
    <div class="text-btn-container">
      <div class="button-header">
        <h1>
          Hey you! Discover events for all the things you love, and maybe
          <span>join</span> us?
          <router-link :to="{ name: 'create' }">Create event</router-link>
        </h1>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      toPage: "/meetup/create",
    };
  },
};
</script>

<style lang="scss" scoped>
.header-pic {
  width: 100%;
  display: flex;
  margin: auto;
  background: no-repeat center;

  .text-btn-container {
    margin-left: 100px;
  }
  .button-header {
    width: 100%;
    margin: 100px;
    max-width: 340px;
    text-align: center;
    position: relative;
    a {
      width: 250px;
      margin: 25px;
      display: block;
      padding: 1rem 0;
      transition: 0.3s;
      color: #f5d67b;
      font-size: 1.2rem;
      border-radius: 5px;
      font-weight: bolder;
      letter-spacing: 1px;
      text-decoration: none;
      background: rgb(10, 6, 6);
      text-transform: uppercase;
      &:hover {
        opacity: 0.7;
        transform: scale(1.2);
        transform: translateX(15px);
        border-radius: 37px 0 37px 0;
        box-shadow: 3px 3px rgb(48, 43, 43);
      }
    }
    h1 {
      color: #000;
      margin-top: 1rem;
      font-size: 1.7rem;
      background: #fff;
      letter-spacing: 1px;
      text-shadow: 2px 2px 2px rgba(rgb(0, 0, 0), 0.3);
      span {
        color: #aa8817;
        font-size: 1.8rem;
      }
    }
  }
}
</style>