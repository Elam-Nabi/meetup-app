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
      <span class="attendees"> Attendees ({{ event.attendees }})</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["event"],
};
</script>

<style lang="scss" scoped>
.card-container {
  height: 100vh;
  background: no-repeat center center/cover;

  .item-containers {
    margin-left: 30px;
    margin: 100px;
  }

  .card-date {
    color: #aa8817;
    padding: 30px;
    display: block;
    margin-top: 90px;
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
      color: #aa8817;
      display: block;
      font-weight: bold;
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
  }
}
</style>