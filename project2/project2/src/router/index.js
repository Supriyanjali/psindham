import Vue from 'vue'
import Router from 'vue-router'
import signin from '@/components/SignIn.vue'
import signup from '@/components/SignUp.vue'
import forgetpassword from '@/components/ForgetPassword.vue'
import profile from '@/components/Profile'
import orders from '@/components/Orders'
import product from '@/components/Product'
import addnewproduct from '@/components/AddNewProduct'
import addproduct from '@/components/AddProduct'
import Home from '@/components/Home'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/merchant/signin',
      name: 'SignIn',
      component: signin
    },
    {
      path: '/merchant/signup',
      name: 'SignUp',
      component: signup
    },
    {
      path: '/merchant/forgetpassword',
      name: 'ForgetPassword',
      component: forgetpassword
    },
    {
      path: '/merchant/profile',
      name: 'Profile',
      component: profile
    },
    {
      path: '/merchant/orders',
      name: 'Orders',
      component: orders
    },
    {
      path: '/merchant/product',
      name: 'Product',
      component: product
    },
    {
      path: '/merchant/addnewproduct',
      name: 'AddNewProduct',
      component: addnewproduct
    },
    {
      path: '/merchant/addproduct',
      name: 'AddProduct',
      component: addproduct
    },
    {
      path: '/merchant/home',
      name: 'Home',
      component: Home
    }
  ]
})
