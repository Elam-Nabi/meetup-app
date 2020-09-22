<template>
  <div>
    <carousel class="carousel" :perPageCustom="[[768, 3], [1024, 4]]">
      <slide v-for="event in events" :key="event.id">
        <img class="pictures" :src="event.eventImage" alt="image" />
        <span class="date">{{ event.eventDate }}</span>
        <h3 class="title">{{ event.eventTitle }}</h3>
        <span class="attendees">Attendees: {{ event.attendees }}</span>
      </slide>
    </carousel>
  </div>
</template>

<script>
import axios from "axios";
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      events: {},
    };
  },
  async created() {
    try {
      const res = await axios.get("http://localhost:3000/meetupEvents");
      this.events = res.data;
    } catch (error) {
      this.error = "Something went wrong!";
    }
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  background: #e9e9e9;

  .pictures {
    border-radius: 5px;
    border: 1px solid rgba(46, 62, 72, 0.12);
  }
}
.title,
.date,
.attendees {
  padding: 4px;
  letter-spacing: 2px;
}
</style>