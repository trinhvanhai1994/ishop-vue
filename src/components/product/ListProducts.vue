<template>
  <div class="api-calling">
    <Category></Category>
    <div class="error" v-if="errors.length">
           <span v-for="(err, index) in errors" :key="index">
               {{ err }}
           </span>
      <hr>
    </div>
    <hr>
    <ProductView :list_products="list_products"></ProductView>
  </div>
</template>

<script>
  import Category from "./Category";
  import ProductView from "./ProductView";
  export default {
    name: 'ListProduct',
    components: {
      Category,
      ProductView
    },
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
      getListProducts() {
        let baseURI = 'http://127.0.0.1:8080/products/';
        this.$http.get(baseURI + 'all')
          .then((result) => {
            this.list_products = result.data
          });
      },
      viewProduct(id) {
        this.$router.push({name:'ProductDetail', params:{id}})
      },
      deleteProduct(id, index) {
        let baseURI = 'http://127.0.0.1:8080/products/';
        this.$delete(this.list_products, index)
        this.$http.delete(baseURI + id);
      }
    }
  }
</script>
<style>
</style>
