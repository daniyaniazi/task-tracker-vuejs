<template>
  <div class="container">
    <Header @toogle-add-task="toogleAddTask" title="Task Tracker" />
    <AddTask v-show="showAddTask" @add-task="addTask" />
    <!-- since task is dynamic we bind it -->
    <!-- keep this  attribute up-to-date -->
    <Task
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      v-bind:tasks="tasks"
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Task from "./components/Tasks.vue";
import AddTask from "./components/AddTask.vue";

export default {
  name: "App",
  components: {
    Header,
    Task,
    AddTask,
  },
  // STATE JUST LIKE REACT
  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },
  methods: {
    addTask(newTask) {
      this.tasks = [...this.tasks, newTask];
    },
    deleteTask(id) {
      if (confirm("Are you sure")) {
        this.tasks = this.tasks.filter((task) => {
          return task.id !== id;
        });
      }
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
    toogleAddTask() {
      this.showAddTask = !this.showAddTask;
      console.log(this.showAddTask);
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
        reminder: false,
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
  padding: 60px 0px;
  background: #35495e;
  height: 100%;
  color: aliceblue;
}
</style>
