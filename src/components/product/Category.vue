<template>
  <div class="btn-group">
    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Action
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        product: {
          name: '',
          price: 0,
          image: '',
          discount: 0,
          createdAt: ''
        },
        errors: [],
        list_products: []
      }
    },
    created() {
      this.getListProducts()
    },
    methods: {
      getListProductsByCategory(category) {
        let baseURI = 'http://127.0.0.1:8080/products/all?category=';
        this.$http.get(baseURI + category)
          .then((result) => {
            this.list_products = result.data
          });
      }
    }
  }
</script>
<style>
</style>
