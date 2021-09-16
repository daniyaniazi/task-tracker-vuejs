<template>
  <footer>
    <p>CopyRight &copy; 2021</p>
    <router-link to="/about">About us</router-link>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
footer {
  display: block;
  background: #35495e;
  width: 100%;
  padding-bottom: 30px;
  bottom: 0px;
}
a {
  color: #42b883;
}
</style>
