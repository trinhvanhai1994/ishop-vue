<template>
  <div>
    <div class="container my-5">
      <div class="col-md-10">
        <div class="container">
          <div>
            <div v-for="item in cartResponse.items" :key="item.id">
                <b-row>
                  <b-col>
                    <img src="../../assets/images/image2.jpg" class="img-thumbnail"
                         width="600" height="400" alt="PickGunny">
                    <h2>
                      <strong>Product Name: {{item.name}}</strong><br>
                      <strong>Price: <i>{{item.price}}</i> $</strong><br>
                      <strong>Quantity: {{item.quantity}}</strong><br>
                      <button class="alert-danger" v-on:click="deleteItem(item.id)">Delete Product</button>
                    </h2>
                  </b-col>
                </b-row>
            </div>
          </div>
          <div>
            <h2>
              <br><strong>AmountTotal <p class="text-danger">{{cartResponse.amountTotal}}</p></strong><br>
              <strong><span>AmountAfterDiscountTotal <p class="text-danger">{{cartResponse.amountAfterDiscountTotal}}</p></span></strong>
            </h2>
          </div>
          <button class="alert-success" v-on:click="backHome(item.id)">Back Home</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CartInfo',
    data() {
      return {
        item: {
          id: this.$route.params.id,
          name: '',
          price: 0,
          quantity: 0,
          image: '',
          priceTotal: 0,
          discount: 0
        },
        cartResponse: {
          userId: 0,
          items: [],
          amountTotal: 0,
          amountAfterDiscountTotal: 0,
        },
      }
    },
    created() {
      this.getCartInfo(this.$route.params.id)
    },
    methods: {
      getCartInfo(id) {
        let baseURI = 'http://127.0.0.1:8080/carts';
        let url = '?userId=' + 2 + '&productId=' + id;
        this.$http.get(baseURI + url)
          .then((result) => {
            this.cartResponse = result.data;
          });
      },
      backHome(id) {
        this.$router.push({name:'Home', params:{id}});
      },
      deleteItem(id) {
        let baseURI = 'http://127.0.0.1:8080/carts';
        let url = '?userId=' + 2 + '&productId=' + id;
        this.$http.delete(baseURI + url)
          .then((result) => {
            this.cartResponse = result.data;
          });
      }
    }
  }
</script>
<style scoped>
  /*@import "./src/assets/css/productDetail.css";*/
</style>
