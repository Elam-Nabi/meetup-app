<template>
  <div class="form-container">
    <ul>
      <li v-for="(error, index) in errors" :key="index">
        {{ error }}
      </li>
    </ul>
    <form class="review-form" @submit.prevent="onSubmit">
      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="input.name" placeholder="name" />
      </p>

      <p>
        <label for="review">Review:</label>
        <textarea id="review" v-model="input.review"></textarea>
      </p>

      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="input.rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>

      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>

    <div id="review-container">
      <ul>
        <li v-for="(review, index) in reviewEvents" :key="index">
          <h1>{{ review.input.name }}</h1>
          <p>{{ review.input.review }}</p>
          <p>{{ review.input.rating }}</p>
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
        name: [],
        review: [],
        rating: [],
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
      if (!this.input.rating) {
        this.errors.push("Rating required.");
      }

      if (!this.errors.length) {
        console.log("submitted");
        this.$store.commit("ADD_REVIEW", {
          id: Date.now(),
          input: this.input,
        });
        this.input = [];
      }
    },
  },

  computed: {
    ...mapState(["reviewEvents"]),
  },
};
</script>

<style lang="scss" scoped>
</style>