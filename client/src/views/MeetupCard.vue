<template>
  <div
    v-if="event"
    class="card-container"
    :style="{
      backgroundImage: `url(${require('../assets/bird.jpg')})`,
    }"
  >
    <div class="item-containers">
      <span class="card-date">{{
        event.eventDate | moment("dddd, MMMM Do YYYY")
      }}</span>
      <span class="title-text">{{ event.eventTitle }}</span>
      <span class="name"
        >Hosted by <span>{{ event.eventName }}.</span></span
      >
      <title>{{ event.eventParagraph }}</title>
      <img :src="event.eventImage" alt="image" />
      <p class="details">Details</p>
      <span class="details-text"> {{ event.eventText }}</span>
      <span class="attendees">
        Attendees <span>({{ event.attendees }})</span>
        <Review />
        <button class="back-btn" @click="$router.go(-1)">Back</button>
        <button id="attend" @click="event.attendees++">Attend</button>
      </span>
    </div>
  </div>
</template>

<script>
import Review from "@/components/Review.vue";
export default {
  components: {
    Review,
  },
  props: ["event"],
};
</script>

<style lang="scss" scoped>
.card-container {
  width: 100vw;
  height: 100vh;
  background: no-repeat center center/cover;
  .item-containers {
    margin-left: 30px;
    margin: 100px;
    .back-btn {
      margin: 10px;
    }
    .back-btn,
    #attend {
      border: 0;
      width: 65px;
      outline: none;
      padding: 10px;
      font-size: 1rem;
      font-size: 12px;
      cursor: pointer;
      margin-top: 65px;
      color: #f5d67b;
      border-radius: 4px;
      letter-spacing: 1px;
      font-weight: bolder;
      text-transform: uppercase;
      transition: all 0.4s ease;
      background: rgb(10, 6, 6);
      &:hover {
        transition: 0.7s;
        border-radius: 30px 0px 30px 0px;
      }
    }
  }
  .card-date {
    padding: 30px;
    display: block;
    margin-top: 90px;
    color: #aa8817;
    margin-left: -20px;
  }
  .title-text {
    display: block;
    font-size: 1.7rem;
    margin-top: -23px;
    font-weight: bolder;
  }
  .name {
    padding: 10px;
    display: block;
    span {
      display: block;
      font-weight: bold;
      color: #aa8817;
    }
  }
  img {
    width: 40%;
    margin-top: 10px;
    margin-bottom: 40px;
  }
  .details {
    font-weight: bold;
    font-size: 1.4rem;
  }
  .details-text {
    width: 40%;
    display: block;
    margin-top: 25px;
    color: #aa8817;
    letter-spacing: 1px;
    margin-bottom: 80px;
  }
  .attendees {
    margin-top: 5px;
    span {
      font-weight: bolder;
    }
  }
}
</style>