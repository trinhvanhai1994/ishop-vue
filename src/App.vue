<template>
  <div>
    <div id="app">
      <NavbarTop></NavbarTop>
      <router-view/>
    </div>
      <Footer></Footer>
  </div>
</template>

<script>
  import NavbarTop from './components/navbar/NavbarTop'
  import Footer from "./components/footer/Footer";
  import Home from "./components/Home";

  export default {
    name: 'app',
    components: {
      Footer,
      NavbarTop,
      Home
    }
  }
</script>

<style scoped>
  @import "../src/assets/css/home.css";
</style>
