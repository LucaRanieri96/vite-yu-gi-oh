<script>
import { store } from "../store.js";
export default {
  name: "CardItem",
  props: {
    card: Object,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="col d-flex justify-content-center my-2">
    <div class="card" style="width: 18rem">
      <img
        :src="card.card_images[0].image_url"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{ card.name }}</h5>
        <p class="card-text">{{ card.type }}</p>
        <p>{{ card.race }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
</style>
