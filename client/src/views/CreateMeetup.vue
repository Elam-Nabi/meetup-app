<template>
  <div>
    <img :src="img" alt="event-image" />
    <input type="file" @change="imgFile" />
    <form @submit.prevent="addEvent">
      <input type="text" placeholder="title" v-model="input.title" />
      <input type="name" placeholder="name" v-model="input.name" />
      <textarea
        placeholder="Describe event"
        v-model="input.description"
      ></textarea>
      <input type="date" v-model="input.date" />
      <button>Create event</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: {
        title: null,
        name: null,
        description: null,
        date: null,
        attendees: 0,
      },
      img: null,
    };
  },

  methods: {
    imgFile(event) {
      this.img = URL.createObjectURL(event.target.files[0]);
    },

    addEvent() {
      const newEvent = {
        id: Date.now(),
        eventImage: this.img,
        eventName: this.input.name,
        eventDate: this.input.date,
        eventPhrase: this.input.description,
        eventTitle: this.input.title,
        attendees: this.input.attendees,
      };
      this.$store.commit("ADD_EVENT", newEvent);
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  margin-top: 100px;

  img {
    width: 100px;
    display: block;
  }
}
</style>