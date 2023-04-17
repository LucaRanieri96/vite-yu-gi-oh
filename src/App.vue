<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteMain from "./components/SiteMain.vue";
import { store } from "./store.js"

export default {
  components: {
    SiteHeader,
    SiteMain,
  },
  data() {
    return {
      store
    };
  },
  methods: {},
  created() {
    store.fetchCards(store.apiUrl);
  },
};
</script>

<template>
  <SiteHeader></SiteHeader>
  <SiteMain></SiteMain>
</template>

<style lang="scss">
@use "/node_modules/bootstrap/scss/bootstrap.scss";
@use "./styles/style.scss";
</style>
