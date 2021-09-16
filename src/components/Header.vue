<template>
  <header>
    <h1>{{ title }}{{ showAddTask }}</h1>
    <Button
      @toogle-add-task="$emit('toogle-add-task')"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? 'white' : '#42b883'"
    />
  </header>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Header",
  // props: ["title"],
  props: {
    // title: String,
    title: {
      type: String,
      default: "Hello Vue",
    },
    showAddTask: Boolean,
  },
  methods: {
    onToogle() {
      console.log("clicked");
      this.$emit("toogle-add-task");
    },
  },
  components: {
    Button,
  },
  emits: ["toogle-add-task"],
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: column;
}

button {
  display: block;
  padding: 10px 60px;
  background: #42b883;
}
</style>
