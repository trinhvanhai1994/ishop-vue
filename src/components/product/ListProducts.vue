<template>
  <div class="api-calling">
    <div class="error" v-if="errors.length">
           <span v-for="(err, index) in errors" :key="index">
               {{ err }}
           </span>
      <hr>
    </div>
    <hr>

    <div>
      <div>
        <div v-for="(prod, index) in list_products" :key="prod.id">
          <img src="../../assets/images/image2.jpg" class="img-thumbnail"
               width="600" height="400" alt="PickGunny">
          <h2>
            <strong>{{prod.name}}</strong><br>
            <strong><span>Price: </span></strong>
            <i>{{prod.price}}</i><strong>$</strong>
          </h2>
          <a v-on:click="viewProduct(prod.id)">
            <button class="alert-success">Production Detail</button>
          </a>
          <a v-on:click="deleteProduct(prod.id, index)">
            <button class="alert-danger">Delete</button>
          </a><br>
        </div><br>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ListProduct',
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
        this.$http.delete(baseURI + id);
        this.$delete(this.list_products, index)
      }
    }
  }
</script>
<style>
</style>
