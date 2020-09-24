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
          <router-link :to="toPage">Good Vibes Only</router-link>
        </h1>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      toPage: "/meetup/meetupslogin",
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
    margin-left: 60px;
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
      color: #fff;
      display: block;
      padding: 1rem 0;
      transition: 0.3s;
      font-size: 1.2rem;
      border-radius: 5px;
      font-weight: bolder;
      letter-spacing: 1px;
      text-decoration: none;
      background: #d3b9b9;
      text-transform: uppercase;
      &:hover {
        opacity: 0.7;
        transform: scale(1.2);
        transform: translateX(15px);
        border-radius: 35px 0 35px 0;
        box-shadow: 3px 3px rgb(160, 79, 79);
      }
    }
    h1 {
      color: #f3f7fa;
      margin-top: 1rem;
      font-size: 1.7rem;
      background: #fff;
      letter-spacing: 1px;
      text-shadow: 2px 2px 2px rgba(rgb(0, 0, 0), 0.7);
      span {
        color: #d3b9b9;
        font-size: 1.8rem;
      }
    }
  }
}
</style>