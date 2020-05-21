<template>
  <div class="container">
    <div class="bs-example">
      <form>
        <div class="form-group row">
          <label for="name" class="col-sm-2 col-form-label">Product Name</label>
          <div class="col-sm-10">
            <input type="text" v-model="name" class="form-control" id="name" placeholder="Product Name" required>
          </div>
        </div>
        <div class="form-group row">
          <label for="image" class="col-sm-2 col-form-label">Image</label>
          <div class="col-sm-10">
            <input type="text" v-model="image" class="form-control" id="image" placeholder="Image" required>
          </div>
        </div>
        <div class="form-group row">
          <label for="price" class="col-sm-2 col-form-label">Price</label>
          <div class="col-sm-10">
            <input type="text" v-model="price" class="form-control" id="price" placeholder="Price" required>
          </div>
        </div>
        <div class="form-group row">
          <label for="discount" class="col-sm-2 col-form-label">Discount</label>
          <div class="col-sm-10">
            <input type="text" v-model="discount" class="form-control" id="discount" placeholder="Discount" required>
          </div>
        </div>
        <label for="category">Choose a Category:</label>
        <select v-model="category" id="category" name="Category" >
          <option value="1">SPRING</option>
          <option value="2">SUMMER</option>
          <option value="3">FALL</option>
          <option value="4">WINTER</option>
        </select>

        <div class="form-group row">
          <div class="col-sm-10 offset-sm-2">
            <button v-on:click="addProduct()" type="submit" class="btn btn-primary">Add Product</button>
          </div>
        </div>
      </form>
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
        category: 0,
        discount: 0,
        // waitRequest: true
      }
    },
    created() {
      this.addProduct()
    },
    methods: {
      addProduct() {
        // this.waitRequest = false;
        let baseURI = 'http://127.0.0.1:8080/products';
        this.$http.post(baseURI, {
          name: this.name,
          price: this.price,
          image: this.image,
          category: this.category,
          discount: this.discount
        })
          .then((result) => {
            // if (result.data.isStatus) {
              // this.waitRequest = true;
              alert('Add product successfully.');
            // }
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
  .bs-example{
    margin: 20px;
  }
</style>
