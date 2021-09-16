<template>
  <div :key="task.id" v-for="task in tasks">
    <!-- Adding recieve event response action but data is in the up level component i,e App -->
    <Task
      @toggle-reminder="$emit('toggle-reminder', task.id)"
      v-on:delete-task="$emit('delete-task', task.id)"
      :task="task"
    />
  </div>
</template>

<script>
import Task from "./task.vue";
export default {
  name: "Tasks",
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
  emit: [
    "delete-task",
    "toggle-reminder",
    // it is an array of events we are emiiting
  ],
};
</script>
