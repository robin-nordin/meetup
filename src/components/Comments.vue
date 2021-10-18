<template>
  <main>
    <h4 v-if="isEmpty">Join a meetup!</h4>
    <section v-for="(event, title) in events" :key="title" class="comments">
      <div v-if="event.userNames.length !== 0">
        <h4>{{ event.title }}</h4>
        <p>{{ event.date }}</p>
        <p>{{ event.location }}</p>
        <div v-show="event.joinForm" class="comment-form">
          <input type="text" placeholder="Write a review" class="input-field" v-model="event.userComment"/>
          <button @click="saveUserCommentToEvent(event.userComment, event.userComments), saveToStorage(), (event.userComment = null)" class="comment-btn">comment</button>
        </div>
        <div class="comments">
          <h4>Previous reviews</h4>
          <ul id="userComments">
            <li v-for="($value, index) in event.userComments" :key="index">{{ $value }}</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Comments",
  components: {},

  data() {
    return {
      names: [],
      isEmpty: true,
      events: [],
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      const events = JSON.parse(localStorage.getItem("events"));
      if (events !== null) {
        this.events = events;
        this.isEmpty = !this.isEmpty;
      }
    },

    saveToStorage() {
      const parsed = JSON.stringify(this.events);
      localStorage.setItem("events", parsed);
    },

    saveUserCommentToEvent(userComment, userComments) {
      userComments.push(userComment);
    },
    
  },
};
</script>

<style scoped>
main {
  margin: 3rem;
}

.comments {
  margin-top: 1rem;
}

ul {
  list-style-type: none;
}

</style>
