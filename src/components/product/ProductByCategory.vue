<template>
  <div class="api-calling">
    <div class="title">
      <div v-if="category === '1'">
        <h1 class="btn btn-info">Spring</h1>
      </div>
      <div v-if="category === '2'">
        <h1 class="btn btn-info">Summer</h1>
      </div>
      <div v-if="category === '3'">
        <h1 class="btn btn-info">Fall</h1>
      </div>
      <div v-if="category === '4'">
        <h1 class="btn btn-info">Winter</h1>
      </div>
    </div>

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
    name: 'ProductByCategory',
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
        category: this.$route.params.id,
        list_products: []
      }
    },
    created() {
      this.getProductsByCategory(this.category);
    },
    methods: {
      getProductsByCategory(category) {
        let self = this;
        let baseURI = 'http://127.0.0.1:8080/products/category/';
        this.$http.get(baseURI + category)
          .then((result) => {
             this.list_products = result.data
          });
      },
      viewProduct(id) {
        this.$router.push({name: 'ProductDetail', params: {id}})
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
  .title {
    margin-top: 10px;
  }
</style>
