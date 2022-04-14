<template>
  <Navbar />
</template>

<script>
import Navbar from './components/views/Nav-bar.vue'
export default {
  name: "App",
  components: {
    Navbar
  },
};
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

body{
  background-color: #f3f3f4;
}

ul {
  list-style: none;
}
li {
  padding: 8px;
  display: inline;
}
li a {
  text-decoration: none;
  color: rgb(7, 135, 101);
}
li a:hover {
  color: #41b883;
}
li a .router-link-active {
  color:red
}



</style>
