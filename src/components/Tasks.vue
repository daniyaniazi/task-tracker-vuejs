<template>
  <div :key="task.id" v-for="task in tasks">
    <!-- Adding recieve event response action but data is in the up level component i,e App -->
    <Task @delete-task="$emit('delete-task', id)" :task="task" />
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
};
</script>
