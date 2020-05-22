<template>
  <div>
      <nav class="navbar navbar">
        <div class="container-fluid">
          <div class="navbar-header">
            <a href="/#">
              <img src="../../assets/images/meww-logo.png" class="navbar-left" alt="Home"/>
            </a>
          </div>
          <div class= "glyphicon glyphicon-log-in">
          <router-link class="spacing" v-for="routes in links"
                       v-bind:key="routes.id"
                       :to="`${routes.page}`">{{routes.text}}</router-link>
          </div>
          <form class="navbar-form align-items-center">
            <div class="input-group" id="input-group">
              <input type="text" class="form-control" placeholder="Search" name="search">
              <div class="input-group-btn">
                <button class="btn btn-default" type="submit">
                  <i class="glyphicon glyphicon-search"></i>
                </button>
              </div>
            </div>
          </form>
          <span class="nav navbar-nav navbar-right">
            <a href="/#"><span class="glyphicon glyphicon-log-in"></span> Login</a>
        </span>
        </div>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 1,
          text: 'Home',
          page:'/Home'
        },
        {
          id: 2,
          text: 'About',
          page:'/About'
        },
        {
          id: 3,
          text: 'Contact',
          page:'/Contact'
        },
        {
          id: 4,
          text: 'AddProduct',
          page:'/add-product'
        },
        {
          id: 5,
          text: 'Category',
          page:'/category'
        }
      ]
    }
  }
}
</script>
<style>
.spacing {
  margin-right: 10px;
}
</style>

