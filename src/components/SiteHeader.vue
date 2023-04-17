<script>
export default {
  name: "SiteHeader",
};
</script>

<template>
  <header class="d-flex align-items-center gap-4">
    <img src="../assets/imgs/Yugioh_anime_logo.webp" alt="" />
    <h1>Yu-Gi-Oh Api</h1>
  </header>
</template>

<style scoped lang="scss">
@use "../styles/partials/_variables.scss" as *;

header{
  height: 100px;
}
img{
  max-height: 50%;
}
</style>
