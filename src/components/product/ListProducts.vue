<template>
  <div class="api-calling">
    <div class="error" v-if="errors.length">
           <span v-for="(err, index) in errors" :key="index">
               {{ err }}
           </span>
      <hr>
    </div>
    <hr>

    <div class="col-md-8">
      <div v-for="prod in list_products" :key="prod.id">
        <div>
          <img src="../../assets/images/image2.jpg" class="img-thumbnail"
               width="600" height="400" alt="PickGunny">
        </div>
        <div>
          <h2>
            <strong>{{prod.name}}</strong><br>
            <strong><span>Price: </span></strong>
            <i>{{prod.price}}</i><strong>$</strong>
          </h2>
<!--          <a href="/product/{{prod.id}}" title="PickGunny">-->
            <span class="bg-success"><h3>Xem chi tiết</h3></span>
<!--          </a>-->
        </div>
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
        const baseURI = 'http://127.0.0.1:8080/products/all'
        this.$http.get(baseURI)
          .then((result) => {
            this.list_products = result.data
          });
      }
    }
  }
</script>
<style>
</style>
