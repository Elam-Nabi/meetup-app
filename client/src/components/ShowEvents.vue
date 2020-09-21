<template>
  <div></div>
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
      const res = await axios.get("http://localhost:3000/events");
      this.events = res.data;
    } catch (error) {
      this.error = "Something went wrong!";
    }
  },
};
</script>

<style lang="scss" scoped>
</style>