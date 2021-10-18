<template>
  <main>
    <section v-for="(event, title) in events" :key="title">
      <h4>{{ event.title }}</h4>
      <p>Location: {{ event.location }}</p>
      <p>Date: {{ event.date }}</p>
      <p>Time: {{ event.time }}</p>
      <button v-show="!event.joinForm" @click="event.joinForm = !event.joinForm">Join</button>
      <div v-show="event.joinForm" class="join">
        <h4>Please enter name to join event</h4>
        <input type="text" placeholder="Name" v-model="event.userName"/>
        <button @click="saveUserToEvent(event.userName, event.userNames), saveUserToStorage(), (event.userName = '')">Join</button>
      </div>
    </section>
  </main>
</template>

<script>

export default {
  name: "Home",
  components: {},

  data() {
    return {
      names: [],
      events: [
        {
          title: "Be a superhero",
          location: "Stark Tower",
          date: "16/01/2022",
          time: "12:00",
          joinForm: false,
          userNames: [],
          userComments: [],
        },
        {
          title: "Catch a pokémon",
          location: "Vermilion City",
          date: "04/02/2022",
          time: "19:00",
          joinForm: false,
          userNames: [],
          userComments: [],
        },
        {
          title: "Go two rounds against Mike Tyson",
          location: "Boxing ring",
          date: "26/02/2022",
          time: "15:00",
          joinForm: false,
          userNames: [],
          userComments: [],
        },
      ],
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
      }
    },

    saveUserToStorage() {
      const parsed = JSON.stringify(this.events);
      localStorage.setItem("events", parsed);
    },

    saveUserToEvent(userName, userNames) {
      userNames.push(userName);
    },
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 3rem;
}

.join {
  margin: 0 0 2rem;
  display: flex;
  flex-direction: column;
}

input, button {
  width: 15rem;
  height: 1.5rem
}



</style>
