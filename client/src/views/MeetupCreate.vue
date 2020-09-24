<template>
  <div v-if="event" class="card-container">
    <span class="card-date">{{
      event.eventDate | moment("dddd, MMMM Do YYYY")
    }}</span>
    <span class="title-text">{{ event.eventTitle }}</span>
    <title>{{ event.eventPhrase }}</title>
    <img :src="event.eventImage" alt="image" />
    <p><span class="details-text">Details</span> {{ event.eventText }}</p>
    <span> Attendees ({{ event.attendees }})</span>
  </div>
</template>

<script>
export default {
  props: ["event"],
};
</script>

<style lang="scss" scoped>
.card-container {
  padding: 40px;
  display: grid;

  .card-date {
    color: gray;
  }

  .title-text {
    font-weight: bolder;
    font-size: 2rem;
  }

  img {
    width: 40%;
    border-radius: 20px;
  }
}
</style>