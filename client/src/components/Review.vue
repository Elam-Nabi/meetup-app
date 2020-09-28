<template>
  <div class="form-container">
    <h2>Write a review</h2>
    <ul>
      <li v-for="(error, index) in errors" :key="index">
        {{ error }}
      </li>
    </ul>
    <section class="user-actions">
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
          <li
            v-for="(review, index) in currentReview($route.params.id)"
            :key="index"
          >
            <h3>Your review :</h3>
            <h1>{{ review.input.name }}</h1>
            <p>{{ review.input.review }}</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
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
          id: this.$route.params.id,
          input: this.input,
        });
        this.input = {};
      }
    },
  },

  computed: {
    ...mapState(["reviewEvents"]),
    ...mapGetters(["currentReview"]),
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  width: 90%;
  max-width: 560px;
  margin-top: 20px;

  ::placeholder {
    color: #aa8817;
  }
  .user-actions {
    display: flex;
    justify-content: space-between;
  }
  li {
    list-style-type: none;
  }

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

input,
textarea {
  border: 0;
  width: 200px;
  outline: none;
  font-size: 1rem;
  color: #aa8817;
  padding: 10px 0px;
  background: transparent;
  border-bottom: 1px solid #888;
}
</style>