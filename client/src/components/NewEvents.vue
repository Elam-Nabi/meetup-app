<template>
  <div>
    <h1 class="event-text">New Events, SE</h1>
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
export default {
  data() {
    return {
      events: [],
    };
  },
  created() {
    this.events = JSON.parse(localStorage.getItem("newEvents"));
  },
};
</script>

<style lang="scss" scoped>
</style>