<template>
  <header>
    <h1>meetup</h1>
    <div>
      <button @click="toggleHome()" class="home-button">Home</button>
      <button @click="toggleComments()" class="comments-button">My events
      </button>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggleHome() {
      this.$emit("toggleHome");
    },
    toggleComments() {
      this.$emit("toggleComments");
    },
  },
};
</script>

<style scoped>
header {
  margin: 3rem;
}

button {
  width: 5rem;
  height: 1.5rem;
}
</style>