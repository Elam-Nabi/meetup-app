  <template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "../src/components/Navbar";
export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,200&display=swap");

* {
  font-family: "Poppins", sans-serif;
}
</style>