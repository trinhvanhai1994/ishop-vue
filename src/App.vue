<template>
  <div>
    <div id="app">
      <NavbarTop></NavbarTop>
      <NavbarLeft></NavbarLeft>
      <Home></Home>
      <router-view/>
    </div>
      <Footer></Footer>
  </div>
</template>

<script>
  import NavbarTop from './components/navbar/NavbarTop'
  import NavbarLeft from "./components/navbar/NavbarLeft";
  import Footer from "./components/footer/Footer";
  import Home from "./components/Home";

  export default {
    name: 'app',
    components: {
      Footer,
      NavbarTop,
      NavbarLeft,
      Home
    }
  }
</script>

<style scoped>
  @import "../src/assets/css/home.css";
</style>
