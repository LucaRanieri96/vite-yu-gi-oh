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
    <div class="container pt-2">
      <select class="form-select w-25 mb-2">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div class="container p-4 light">
        <div class="found p-3">
          <strong>Found {{ store.cards.length }} cards</strong>
        </div>
        <div class="row">
          <CardItem
            :card="card"
            v-for="card in store.cards"
            v-if="!store.storeLoad"
          ></CardItem>

          <div class="col-12 loading" v-else>
            <div>Loading...</div>
          </div>
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
