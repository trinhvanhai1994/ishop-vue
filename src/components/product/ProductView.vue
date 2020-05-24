<template>
  <div>
    <div>
      <div>
        <div v-for="(prod, index) in list_products" :key="prod.id">
          <img v-bind:src="prod.image" class="img-thumbnail"
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
  import Category from "./Category";
  export default {
    name: 'ProductView',
    components: {
      Category
    },
    props: {
      list_products: Array
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
      }
    },
    methods: {
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
