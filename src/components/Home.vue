<template>
  <div>
    <div>
      <img id="bg-image-body" class="fa-font-awesome-logo-full"
           src="../assets/images/top-background.jpg" alt="Background">
      <div>
        <div>
          <div class="container my-5">
            <div class="col-md-10">
              <div class="container">
                <div class="row">
                  <div class="col-sm-4">
                    <NavbarLeft></NavbarLeft>
                  </div>
                  <div class="col-md-8">
                    <ListProducts></ListProducts>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ListProducts from "./product/ListProducts";
  import NavbarLeft from "./navbar/NavbarLeft";

  export default {
    name: 'Home',
    components: {
      NavbarLeft,
      ListProducts
    }
  }
</script>
<style>

</style>
