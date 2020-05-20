<template>
  <div>
    <h1>Contact Me</h1>
    <ul>
      <li>Email: {{email}}</li>
      <h2>the product id is :{{this.$route.params.id}}</h2>
      <li>Website: {{web}}</li>
    </ul>
    <div>
      <div>
        <img src="../../assets/images/image2.jpg" class="img-thumbnail"
             width="600" height="400" alt="PickGunny">
        <h2>
          <strong>TADA</strong><br>
          <strong><span>Price: </span></strong>
          <i>{{created.price}}</i><strong>$</strong>
        </h2>
        <router-link class="spacing" :to="`/Home`">Back</router-link>
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
          name: '',
          price: 0,
          image: '',
          discount: 0,
          createdAt: ''
        },
        productId: this.$route.params.id,
      }
    },
    created() {
      this.getProduct(this.$route.params.id)
    },
    methods: {
      getProduct(id) {
        let baseURI = 'http://127.0.0.1:8080/products/'
        this.$http.get(baseURI + id)
          .then((result) => {
            this.product = result.data
          });
      }
    }
  }
</script>
