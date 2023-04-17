<script>
import CardItem from "./CardItem.vue";
import { store } from "../store.js";

export default {
  name: "SiteMain",
  components: {
    CardItem,
  },
  data() {
    return {
      store,
    };
  },
  mounted() {},
};
</script>

<template>
  <main>
    <div class="container">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle my-4"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Alien</a></li>
          <li><a class="dropdown-item" href="#"></a></li>
          <li><a class="dropdown-item" href="#"></a></li>
        </ul>
      </div>
      <div class="container p-4 light">
        <div class="found p-3">
          <strong>Found {{}} cards</strong>
        </div>
        <div class="row">
          <CardItem :card="card" v-for="card in store.cards"></CardItem>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/_variables.scss" as *;

main {
  background-color: $primary;
}
.light {
  background-color: $light;
}
.found {
  background-color: $dark;
  color: $light;
}
</style>
