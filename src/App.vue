<script setup>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Nav from "./components/Nav.vue";
import Footer from "./components/footer.vue";
import Login from "./components/Login.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div id="app">
    <div id="app">
      <Nav></Nav>
      <router-view />
      <Footer></Footer>
    </div>
  </div>
</template>

<style scoped></style>
