<script>
import { store } from "../store.js"
export default {
  name: "CardItem",
  data() {
      return {
        store
      };
    },
};
</script>

<template>
 <div class="card" style="width: 18rem;">
  <img src="" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</template>

<style lang="scss" scoped>
   
</style>
