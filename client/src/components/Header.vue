<template>
  <header
    class="header-pic"
    :style="{ backgroundImage: `url(${require('../assets/firstpagepic.jpg')})` }"
  >
    <div class="button-header">
      <h1>
        Hey you! Why don't you
        <span>join</span> us?
        <router-link to="/meetups">Good Vibes Only</router-link>
      </h1>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-pic {
  height: 100vh;
  display: flex;
  padding: 0 1rem;
  background: no-repeat center center/cover;
  &::before {
    top: 0;
    right: 0;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(#a7e4db75, 0.5);
  }
  .button-header {
    width: 100%;
    margin: 110px;
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
      color: #fff;
      margin-top: 1rem;
      font-size: 1.7rem;
      letter-spacing: 1px;
      text-shadow: 2px 2px 2px rgba(#000, 0.3);
      span {
        color: #d3b9b9;
        font-size: 1.8rem;
      }
    }
    .hearth-image {
      width: 500px;
      display: flex;
      align-self: flex-end;
    }
  }
}
</style>