<template>
  <form>
    <label for="task">Task : </label><br />
    <input
      type="text"
      id="text"
      name="text"
      v-model="text"
      placeholder="enter task"
    /><br />

    <label for="day">Day and time</label><br />
    <input type="text" id="day" name="day" v-model="day" /><br /><br />

    <label for="reminder">Set Reminder</label><br />
    <input
      type="checkbox"
      id="reminder"
      v-model="reminder"
      name="reminder"
    /><br /><br />

    <input type="submit" value="Save Task" />
  </form>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      text: "Test",
      day: "",
      reminder: false,
    };
  },
};
</script>

<style scoped>
form {
  text-align: left;

  background: #42b883;
  width: 60%;
  margin: auto;
  padding: 20px 0px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px #07301f;
  margin-bottom: 20px;
}

input {
  margin-left: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  outline: none;
  border: none;
  margin-bottom: 10px;
}
label {
  margin-left: 20px;
  padding-bottom: 10px;
  color: #07301f;
  font-size: 18px;
}
</style>
