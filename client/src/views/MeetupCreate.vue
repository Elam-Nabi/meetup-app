<template>
  <div
    v-if="event"
    class="card-container"
    :style="{
      backgroundImage: `url(${require('../assets/flowers.jpg')})`,
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
  }

  .card-date {
    color: gray;
    display: block;
    padding: 30px;
    margin-top: 90px;
    margin-left: -20px;
  }

  .title-text {
    font-size: 1.7rem;
    font-weight: bolder;
    display: block;
    margin-top: -23px;
  }

  .name {
    display: block;
    padding: 10px;

    span {
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
    display: block;
    margin-top: 25px;
    letter-spacing: 1px;
    width: 40%;
    margin-bottom: 100px;
  }

  .attendees {
    margin-top: 10px;
  }
}
</style>