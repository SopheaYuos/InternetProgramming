<template>
  <main>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <detailPage />
  </main>
</template>

<script>
import detailPage from "./components/detailPage.vue";

export default {
  name: "App",
  components: {
    detailPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin: 0 5rem;
}
</style>
