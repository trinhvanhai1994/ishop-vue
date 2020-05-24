<template>
    <div>
      <div class="container my-5">
        <div class="col-md-10">
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <div class="body-product">
                  <img v-bind:src="product.image" class="img-thumbnail"
                       width="600" height="400" alt="PickGunny">
                  <h2>
                    <strong>Name: {{product.name}}</strong><br>
                    <strong>Discount: {{product.discount}}</strong><br>
                    <strong><span>Price: </span></strong>
                    <i>{{product.price}}</i><strong>$</strong>
                  </h2>
                  <button class="alert-danger" v-on:click="addToCart(product.id)"> Add To Cart </button>
                  <router-link class="alert-success" :to="`/Home`">Back</router-link>
                </div>
              </div>
              <div class="col-md-8">
                <h3>
                 Description
                </h3><br>
                <p>{{product.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductDetail',
    data() {
      return {
        product: {
          id: this.$route.params.id,
          name: '',
          price: 0,
          image: '',
          discount: 0,
          description: '',
          createdAt: ''
        }
      }
    },
    created() {
      this.getProduct(this.$route.params.id)
    },
    methods: {
      getProduct(id) {
        let baseURI = 'http://127.0.0.1:8080/products/';
        this.$http.get(baseURI + id)
          .then((result) => {
            this.product = result.data
          });
      },
      addToCart(id) {
        this.$router.push({name:'CartInfo', params:{id}})
      }
    }
  }
</script>
<style scoped>
  /*@import "./src/assets/css/productDetail.css";*/
</style>
