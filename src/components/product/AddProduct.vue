<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <form
          id="app"
          v-bind:submit="checkForm"
          action="http://127.0.0.1:8080/products"
          method="post"
        >

          <a v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="error in errors">{{ error }}</li>
            </ul>
          </a>

          <p>
            <input id="name" v-model="name" placeholder="Product Name" type="text" name="name">
          </p>

          <p>
            <input id="price" v-model="price" placeholder="Price" type="text" name="price">
          </p>

          <p>
            <input id="image" v-model="image" placeholder="Image Link" type="text" name="image">
          </p>

          <p>
            <input id="discount" v-model="discount" placeholder="Discount" type="text" name="discount">
          </p>

          <p>
            <select id="category" name="category" v-model="category" a>
              <option disabled value="">Please select category</option>
              <option>SPRING</option>
              <option>SUMMER</option>
              <option>FALL</option>
              <option>WINTER</option>
            </select>
          </p>

          <p>
            <input class="alert-success" type="submit" value="Submit">
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        errors: [],
        id: this.$route.params.id,
        name: '',
        price: 0,
        image: '',
        category: '',
        discount: 0,
        waitRequest: true
      }
    },
    created() {
      this.addProduct()
    },
    methods: {
      addProduct() {
        this.waitRequest = false;
        let baseURI = 'http://127.0.0.1:8080/products';
        this.$http.post(baseURI, {
          name: this.name,
          price: this.price,
          image: this.image,
          category: this.category,
          discount: this.discount
        })
          .then((result) => {
            if (result.data.id !== undefined) {
              this.waitRequest = true;
              alert('Add product successfully.');
            }
          });
      },
      checkForm() {
        this.errors = [];
        if (!this.name) {
          this.errors.push("Name required.");
        }
        if (!this.price) {
          this.errors.push("Price required.");
        }
        if (!this.image) {
          this.errors.push("Image required.");
        }
        if (!this.category) {
          this.errors.push("Category required.");
        }
        if (!this.discount) {
          this.errors.push('Discount required.');

          if (!this.errors.length) {
            return true;
          }
          e.preventDefault();
        }
      }
    }
  }
</script>
<style>
</style>
