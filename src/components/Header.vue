<template>
  <header>
    <h1>{{ title }}</h1>
    <Button text="Add Task" color="#42b883" />
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
  },
  components: {
    Button,
  },
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
