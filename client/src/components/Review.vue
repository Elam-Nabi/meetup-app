<template>
  <div class="form-container">
    <h2>Write a review</h2>
    <ul>
      <li v-for="(error, index) in errors" :key="index">
        {{ error }}
      </li>
    </ul>
    <form class="review-form" @submit.prevent="onSubmit">
      <p>
        <input id="name" v-model="input.name" placeholder="Name" />
      </p>

      <p>
        <textarea
          id="review"
          v-model="input.review"
          placeholder="Review"
          style="resize: none"
        ></textarea>
      </p>

      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>

    <div id="review-container">
      <ul>
        <li v-for="(review, index) in reviewEvents" :key="index">
          <h3>Your review :</h3>
          <h1>{{ review.input.name }}</h1>
          <p>{{ review.input.review }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      input: {
        name: null,
        review: null,
      },
      errors: [],
    };
  },

  methods: {
    onSubmit() {
      this.errors = [];
      if (!this.input.name) {
        this.errors.push("Name required");
      }
      if (!this.input.review) {
        this.errors.push("Review required.");
      }

      if (!this.errors.length) {
        console.log("submitted");
        this.$store.commit("ADD_REVIEW", {
          id: Date.now(),
          input: this.input,
        });
        this.input = {};
      }
    },
  },

  computed: {
    ...mapState(["reviewEvents"]),
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  margin: auto;
  width: 90%;
  max-width: 560px;

  ::placeholder {
    color: #aa8817;
  }

  h3 {
    margin-top: 10px;
  }

  li {
    margin: 1rem;
    display: block;

    p {
      width: 40%;
      margin-top: 5px;
      color: #aa8817;
      letter-spacing: 1px;
    }
  }

  input[type="submit"] {
    border: 0;
    width: 200px;
    padding: 10px;
    margin-top: 10px;
    font-size: 12px;
    cursor: pointer;
    color: #f5d67b;
    border-radius: 4px;
    background: rgb(10, 6, 6);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bolder;
    font-size: 1rem;

    &:hover {
      opacity: 0.7;
      transition: 0.7s;
    }
  }

  input,
  textarea {
    width: 70%;
    padding: 10px 0px;
    background: transparent;
    font-size: 1rem;
    border: 0;
    outline: none;
    color: #aa8817;
    border-bottom: 0.5px solid #888;
  }
}
</style>