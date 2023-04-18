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
        <option v-for="card in store.cards" value="item">{{ card.archetype }}</option>
      </select>
      <div class="container p-4 light">
        <div class="found p-3">
          <strong>Found {{ store.cards.length }} cards</strong>
        </div>
        <div class="row justify-content-center">
          <CardItem
            :card="card"
            v-for="card in store.cards"
            v-if="!store.storeLoad"
          ></CardItem>

          <div class="col-12 loading" v-else>
            <div>Loading...</div>
          </div>
          <button type="button" class="btn btn-light col-2 my-3">Next Page-></button>
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
  background-color: $bg_main;
}
.found {
  background-color: $dark;
  color: $light;
}
</style>
