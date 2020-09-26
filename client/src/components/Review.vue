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
        <input id="name" v-model="name" placeholder="name" />
      </p>

      <p>
        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>
      </p>

      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      errors: [],
    };
  },
  methods: {
    onSubmit() {
      this.errors = [];
      if (!this.name) {
        this.errors.push("Name required");
      }
      if (!this.review) {
        this.errors.push("Review required.");
      }
      if (!this.rating) {
        this.errors.push("Rating required.");
      }
      if (this.errors.length > 0) return;

      if (!this.errors.length) {
        console.log("submitted");
        this.name = null;
        this.review = null;
        this.rating = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>