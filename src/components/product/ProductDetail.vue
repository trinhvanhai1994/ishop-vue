<template>
    <div>
      <div class="container my-5">
        <div class="col-md-10">
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <div class="body-product">
                  <img src="../../assets/images/image2.jpg" class="img-thumbnail"
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
                <p>The mother gave her baby a red apple. The baby tried to eat the apple.
                  His mouth was too small. And he didn't have any teeth. His brother took the apple.
                  His brother ate the apple. The baby cried. His brother gave the baby a blue ball to play with.
                  The baby smiled. His brother took the ball from the baby. He rolled the ball on the floor.
                  The brown and white dog picked up the ball. The dog chewed on the ball. The baby cried again.
                  His brother picked up the cat. He put the cat on the bed with the baby. The baby pulled the cat's tail.
                  The cat jumped off the bed. The dog chased the cat. The baby cried again.
                  His brother let the baby hold a sock. The baby played with the sock. The baby was happy.</p>
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
