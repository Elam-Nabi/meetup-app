<template>
  <div>
    <h1 class="event-text">Events in Stockholm, SE</h1>
    <section>
      <div
        v-for="event in events.meetupEvents"
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
  padding: 13px;
  margin: 10px;
  color: #e9e9e9;
  font-size: 1.8rem;
  text-align: center;
  letter-spacing: 1px;
  text-shadow: 2px 2px 2px rgba(rgb(0, 0, 0), 0.8);
}

section {
  width: 70%;
  gap: 5rem 4;
  margin: auto;
  display: grid;
  align-self: center;
  align-items: center;

  div {
    cursor: pointer;
    border-radius: 7px;
    border: 1px solid rgb(223, 222, 222);

    &:hover {
      transform: scale(1.5);
      transition: all 0.4s ease;
      transform: translateY(-15px);
      box-shadow: 3px 3px 3px rgb(148, 142, 142);
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
      color: gray;
      font-weight: bold;
      font-size: 0.8rem;
    }

    .event-phrase {
      font-size: 0.9rem;
    }

    .title {
      font-size: 0.8rem;
      font-weight: 800;
      color: rgb(145, 142, 142);
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