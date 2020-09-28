<template>
  <div>
    <Header />
    <ShowEvents />
    <NewEvents />
  </div>
</template>

<script>
import Header from "@/components/Header";
import ShowEvents from "@/components/ShowEvents";
import NewEvents from "@/components/NewEvents.vue";
export default {
  components: {
    Header,
    ShowEvents,
    NewEvents,
  },
};
</script>

<style lang="scss" scoped>
</style>