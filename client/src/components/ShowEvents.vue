<template>
  <div>
    <h1 class="event-text">Events in Stockholm, SE</h1>
    <section>
      <div
        v-for="event in events"
        :key="event.id"
        @click="
          $router.push({
            name: 'createmeet',
            params: { id: event.id, event },
          })
        "
      >
        <img class="pictures" :src="event.eventImage" alt="image" />
        <span class="date">{{
          event.eventDate | moment("dddd, MMMM Do YYYY ")
        }}</span>
        <h4 class="event-phrase">{{ event.eventPhrase }}</h4>
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
  margin: 10px;
  color: #000;
  padding: 13px;
  font-size: 1.8rem;
  text-align: center;
  letter-spacing: 1px;
  text-shadow: 2px 2px 2px rgba(rgb(0, 0, 0), 0.3);
}

section {
  width: 70%;
  margin: auto;
  display: grid;

  div {
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
      border-radius: 7px;
      transform: scale(1.03);
      box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
    }

    img {
      width: 100%;
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
    }

    .date,
    .event-phrase,
    .title,
    .attendees {
      margin: 2px;
      padding: 2px;
    }

    .date {
      color: #aa8817;
      font-weight: bold;
      font-size: 0.8rem;
    }

    .event-phrase {
      font-size: 0.9rem;
    }

    .title {
      font-size: 0.8rem;
      font-weight: 800;
    }

    .attendees {
      font-size: 0.8rem;
    }
  }
}

@media screen and (min-width: 1024px) {
  section {
    gap: 4rem 2rem;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>