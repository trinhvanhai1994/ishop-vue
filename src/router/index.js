import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import About from '../components/navbar/About'
import Contact from '../components/navbar/Contact'
import ProductDetail from "../components/product/ProductDetail";
import CartInfo from "../components/product/CartInfo";
import AddProduct from "../components/product/AddProduct";
import Category from "../components/product/Category";
import ProductByCategory from "../components/product/ProductByCategory";

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
      path: '/product-category/:id',
      name: 'ProductByCategory',
      component: ProductByCategory
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/cart-info',
      name: 'CartInfo',
      component: CartInfo
    },
    { path: '*', redirect: '/' }
  ]
});

new Router((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})
