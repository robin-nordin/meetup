<template>
  <div id="app">
    <Header v-on:toggleHome="goHome" v-on:toggleComments="goComments" />
    <Home v-if="isVisible" />
    <Comments v-if="!isVisible" />
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
import Comments from "./components/Comments.vue";

export default {
  name: "App",
  components: {
    Home,
    Header,
    Comments,
  },
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    goHome() {
      if (this.isVisible == false) {
        this.isVisible = !this.isVisible;
      }
    },
    goComments() {
      if (this.isVisible == true) {
        this.isVisible = !this.isVisible;
      }
    },
  },
};
</script>

<style>


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #ffff;
  min-height: 700px;
  height: 100vh;
  min-width: 375px;
}

</style>
