<script setup>
  import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/strings">Guitar Strings</RouterLink> |
    <RouterLink to="/major">Major Chords</RouterLink> |
    <RouterLink to="/minor">Minor Chords</RouterLink>
  </nav>
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>

<style>
html {
  font-size: 16px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
body,
#app {
  margin: 0;
  padding: 0;
}
nav {
  width: 100%;
  height: 45px;
  background: #c6a926;
  text-align: center;
}
nav a, 
nav a:hover, 
nav a:link,  
nav a:visited {
  color: white;
  font-weight: 900;
  font-size: 24px;
  line-height: 2;
  text-decoration: none;
}
nav a:active {
  border-bottom: 1px solid black;
  background-color: lightblue;
}
nav a.router-link-active {
  text-decoration: underline;
  color: rgb(248, 92, 14);
}
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0
}
.container h1 {
  text-align: center;
  font-size: 48px;
}
.container p {
  width: 1000px;
  font-size: 14px;
}
.container img {
  display: block;
  max-width: 650px;
  width: 100%;
  margin: 20px auto 20px;
}
</style>
