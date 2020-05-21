<template>
  <div>
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
</template>

<script>
  import ListProducts from "./product/ListProducts";
  import ProductDetail from "./product/ProductDetail";
  import NavbarLeft from "./navbar/NavbarLeft";

  export default {
    name: 'Home',
    components: {
      NavbarLeft,
      ListProducts,
      ProductDetail
    }
  }
</script>
<style>

</style>
