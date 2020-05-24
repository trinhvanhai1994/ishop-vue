<template>
  <div>
    <h2>About Me</h2>
    <h5>Photo of me:</h5>
    <div class="fakeimg">Fake Image</div>
    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    <h3>Some Links</h3>
    <p>Lorem ipsum dolor sit ame.</p>
    <ul class="nav nav-pills flex-column">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
    </ul>
    <hr class="d-sm-none">

    <div class="dropdown">
      <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">Product Category</button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a v-on:click="viewProducts('1')">
          <button class="alert-success">Spring</button>
        </a>
        <a v-on:click="viewProducts('2')">
          <button class="alert-success">Summer</button>
        </a>
        <a v-on:click="viewProducts('3')">
          <button class="alert-success">Fall</button>
        </a>
        <a v-on:click="viewProducts('4')">
          <button class="alert-success">Winter</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import Category from "../product/Category";

  export default {
    name: 'NavbarLeft',
    components: {
      Category
    },
    methods: {
      viewProducts(id) {
        console.log(id)
        this.$router.push({name: 'Category', params: {id}})
      },
    }
  }
</script>
<style>
  .dropdown:hover > .dropdown-menu {
    display: block;
  }

  .dropdown > .dropdown-toggle:active {
    /*Without this, clicking will make it sticky*/
    pointer-events: none;
  }
</style>
