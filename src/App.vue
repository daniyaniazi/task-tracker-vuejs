<template>
  <div class="container">
    <Header title="Task Tracker" />
    <!-- since task is dynamic we bind it -->
    <!-- keep this  attribute up-to-date -->
    <Task @delete-task="deleteTask" v-bind:tasks="tasks" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Task from "./components/Tasks.vue";
export default {
  name: "App",
  components: {
    Header,
    Task,
  },
  // STATE JUST LIKE REACT
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== id;
      });
    },
  },
  // LIFECYCLE METHOD JUST WHEN COMPONENET IS CREATED
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Learn Vue",
        day: "March 1st at 2:30pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Implement",
        day: "March 1st at 2:30pm",
        reminder: true,
      },
      {
        id: 3,
        text: "Master",
        day: "March 1st at 2:30pm",
        reminder: true,
      },
    ];
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  background: #35495e;
  height: 100vh;
  color: aliceblue;
}
</style>
