<template>
  <div>
    <h1>Category</h1>
    <div class="container">
      <a v-on:click="viewProduct('1')">
        <button class="btn btn-primary">Spring</button>
      </a>
      <a v-on:click="viewProduct('2')">
        <button class="btn btn-primary">Summer</button>
      </a>
      <a v-on:click="viewProduct('3')">
        <button class="btn btn-primary">Fall</button>
      </a>
      <a v-on:click="viewProduct('4')">
        <button class="btn btn-primary">Winter</button>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      viewProduct(id) {
        this.$router.push({name: 'ProductByCategory', params: {id}})
      }
    }
  }
</script>
<style>
</style>
