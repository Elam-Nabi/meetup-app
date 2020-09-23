<template>
  <div>
    <h1 class="event-text">Events in Stockholm, SE</h1>
    <section>
      <div v-for="event in events.meetupEvents" :key="event.id">
        <img class="pictures" :src="event.eventImage" alt="image" />
        <span class="date">{{
          event.eventDate | moment("dddd, MMMM Do YYYY ")
        }}</span>
        <h4>{{ event.eventPhrase }}</h4>
        <h5 class="title">{{ event.eventTitle }}</h5>
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
  padding: 20px;
  color: #d3b9b9;
  font-size: 1.8rem;
  letter-spacing: 1px;
  text-shadow: 2px 2px 2px rgba(#000, 0.2);
}

section {
  gap: 5rem 0;
  width: 100%;
  display: grid;

  div {
    cursor: pointer;
    border-radius: 7px;
    border: 1px solid rgb(194, 194, 194);

    img {
      width: 100%;
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
    }

    .date {
      color: gray;
      font-weight: bold;
      font-size: 0.9rem;
    }

    .title {
      font-size: 0.8rem;
      font-weight: 100;
    }

    .attendees {
      font-size: 0.8rem;
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