import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import About from '../components/navbar/About'
import Contact from '../components/navbar/Contact'
import ProductDetail from "../components/product/ProductDetail";
import CartInfo from "../components/product/CartInfo";
import AddProduct from "../components/product/AddProduct";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Product-detail',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/add-product',
      name: 'AddProduct',
      component: AddProduct
    },
    {
      path: '/cart-info',
      name: 'CartInfo',
      component: CartInfo
    }
  ]
})
