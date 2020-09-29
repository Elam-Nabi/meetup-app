<template>
  <div class="create-container">
    <div
      class="form-container"
      :style="{
        backgroundImage: `url(${require('../assets/walking.jpg')})`,
      }"
    >
      <h1>Create your event!</h1>
      <img :src="img" alt="" />
      <input class="input-file" type="file" @change="imgFile" />
      <form @submit.prevent="addEvent">
        <input type="text" placeholder="title" v-model="input.title" />
        <input type="name" placeholder="name" v-model="input.name" />
        <textarea
          placeholder="Describe event"
          v-model="input.description"
          style="resize: none"
        ></textarea>
        <input type="date" v-model="input.date" />
        <button>Create event</button>
      </form>
    </div>
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
.create-container {
  display: grid;
  justify-content: center;
  margin-top: 150px;

  .form-container {
    background: no-repeat center center/cover;
    height: 100vh;

    h1 {
      margin-bottom: 100px;
    }
  }
  img {
    width: 100px;
    display: block;
  }
  form {
    display: grid;

    input,
    textarea {
      border: 0;
      width: 500px;
      outline: none;
      font-size: 1rem;
      color: #aa8817;
      padding: 10px 0px;
      background: transparent;
      border-bottom: 1px solid #888;
    }

    button,
    .input-file {
      border: 0;
      width: 500px;
      padding: 10px;
      font-size: 1rem;
      font-size: 12px;
      cursor: pointer;
      margin-top: 10px;
      color: #f5d67b;
      border-radius: 4px;
      letter-spacing: 1px;
      font-weight: bolder;
      background: rgb(10, 6, 6);
      text-transform: uppercase;

      &:hover {
        opacity: 0.7;
        transition: 0.7s;
      }
    }
  }
}
</style>