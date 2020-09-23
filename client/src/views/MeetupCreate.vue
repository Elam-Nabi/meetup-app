<template>
  <div v-if="event" class="card-container">
    <span>{{ event.eventDate }}</span>
    <img :src="event.eventImage" alt="image" />
    <p>Details {{ event.eventText }}</p>
    <title>{{ event.eventPhrase }}</title>
    <span> Attendees ({{ event.attendees }})</span>
  </div>
</template>

<script>
export default {
  props: ["event"],
};
</script>

<style lang="scss" scoped>
</style>