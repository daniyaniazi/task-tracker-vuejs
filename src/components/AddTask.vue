<template>
  <form @submit="OnSubmit">
    <label for="task">Task </label>
    <input type="text" id="text" name="text" v-model="text" /><br />

    <label for="day">Day and time</label>
    <input type="text" id="day" name="day" v-model="day" /><br /><br />

    <label for="reminder">Set Reminder</label>
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
      text: "",
      day: "",
      reminder: false,
    };
  },
  methods: {
    OnSubmit(e) {
      e.preventDefault();
      if (!this.text) {
        alert("please add Task");
        return;
      }
      const newTask = {
        id: Math.floor(Math.random() * 100000),
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };

      this.$emit("add-task", newTask);

      (this.text = ""), (this.day = ""), (this.reminder = false);
    },
  },
};
</script>

<style scoped>
form {
  background: #42b883;
  width: 50%;
  margin: auto;
  padding: 20px 0px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px #07301f;
  margin-bottom: 20px;
  box-sizing: border-box;
}

input {
  box-sizing: border-box;
  padding: 10px 5px;
  display: inline-block;
  width: 50%;
  outline: none;
  border: none;
  margin-bottom: 10px;
}
label {
  margin-left: 20px;
  padding-bottom: 10px;
  color: #07301f;
  font-size: 18px;
  float: left;
}
</style>
