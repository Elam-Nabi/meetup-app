<template>
  <div>
    <h1 class="event-text">Events in Stockholm, SE</h1>
    <section>
      <div v-for="event in events.meetupEvents" :key="event.id">
        <img class="pictures" :src="event.eventImage" alt="image" />
        <span class="date">{{ event.eventDate | moment('dddd, MMMM Do YYYY ') }}</span>
        <h3 class="title">{{ event.eventTitle }}</h3>
        <span class="attendees">Attendees: {{ event.attendees }}</span>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      events: {},
    };
  },
  async created() {
    try {
      const res = await axios.get("http://localhost:5000/meetups");
      this.events = res.data;
    } catch (error) {
      this.error = "Something went wrong!";
    }
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: #d3b9b9;
  font-size: 1.8rem;
  letter-spacing: 1px;
  text-shadow: 2px 2px 2px rgba(#000, 0.2);
  padding: 20px;
}
// .section {
//   width: 100%;
//   display: grid;
//   background: #e9e9e9;

//   .pictures {
//     border-radius: 5px;
//     border: 1px solid rgba(46, 62, 72, 0.12);
//   }
// }
// .title,
// .date,
// .attendees {
//   display: block;
//   padding: 4px;
//   letter-spacing: 2px;
// }

section {
  gap: 6rem 0;
  width: 100%;
  display: grid;

  div {
    img {
      width: 100%;
    }
  }
}

@media screen and (min-width: 1024px) {
  section {
    gap: 6rem 2rem;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>