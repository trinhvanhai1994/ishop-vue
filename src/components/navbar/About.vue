<template>
  <div>
    <div>
      <div v-for="prod in list_products" :key="prod.id">
        <img src="../../assets/images/image2.jpg" class="img-thumbnail"
             width="600" height="400" alt="PickGunny">
        <h2>
          <strong>{{prod.name}}</strong><br>
          <strong><span>Price: </span></strong>
          <i>{{prod.price}}</i><strong>$</strong>
        </h2>
        <router-link class="spacing" :to="`/Contact`">Production Detail</router-link>
        <button class="bg-success" v-on:click="getProduct(prod.id)">Production Details</button>
      </div>
    </div>
  </div>
</template>

<script>
  import ListProducts from "../product/ListProducts";
export default {
  name: 'About',
  components: {
    ListProducts
  }
}
</script>
<style>

</style>
