<template>
  <div
    @dblclick="doubleClick(task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h4>
      {{ task.text }}
      <i @click="onDelete(task.id)" class="fas fa-times"></i>
    </h4>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },

  methods: {
    onDelete(id) {
      //  Emiting a custom event
      this.$emit("delete-task", id);
    },
    doubleClick(id) {
      console.log("reminder");
      this.$emit("toggle-reminder", id);
    },
  },
};
</script>

<style scoped>
.task {
  width: 50%;
  background: rgb(238, 238, 238);
  padding: 1px;
  color: #35495e;
  margin: auto;
  margin-bottom: 20px;
  border-radius: 5px;
}
.reminder {
  border-left: 6px solid #42b883;
}
h4,
p {
  margin: 4px;
}
p {
  font-size: 12px;
}
.fas {
  color: #42b883;
  float: right;
  margin-right: 20px;
}
</style>
