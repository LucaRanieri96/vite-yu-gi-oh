<script>
import CardItem from "./CardItem.vue";
import { store } from "../store.js";
import axios from "axios";

export default {
  name: "SiteMain",
  components: {
    CardItem,
  },
  data() {
    return {
      store,
      ArchetypesUrl: "https://db.ygoprodeck.com/api/v7/archetypes.php",
      archetypes: [],
    };
  },
  methods: {
    retrieveArchetypes(url) {
      axios
        .get(url)
        .then((response) => {
          this.archetypes = response.data;
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
  },
  mounted() {
    this.retrieveArchetypes(this.ArchetypesUrl);
  },
};
</script>

<template>
  <main>
    <div class="container pt-2">
      <select class="form-select w-25 mb-2">
        <option v-for="item in archetypes" :value="item.archetype_name">
          {{ item.archetype_name }}
        </option>
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
          />

          <div class="col-12 loading" v-else>
            <div>Loading...</div>
          </div>
          <button type="button" class="btn btn-light col-2 my-3">
            Next Page->
          </button>
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
