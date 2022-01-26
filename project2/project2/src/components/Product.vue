<template>
  <div>
     <Navbar/>
     <router-link to="/merchant/addnewproduct"><button class="adds">Add Products</button></router-link>
     <div class="fields">
          <div class="box-container">
      <ProductCard v-for='product in products' :key="product.id" :product="product"/>
    </div>
    </div>
    <div class="buttons">
      </div>
    <Footer/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
export default {
  components: {
    Navbar,
    Footer,
    ProductCard
  },
  mounted () {
    this.$store.dispatch('getProducts')
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>
<style>

* {
    box-sizing: border-box;
  }
  .product{
    min-height: 100vh;
    margin-top: 30px;
}

.product .box-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding:2rem 0;
    width: 85%;
    margin:0 auto;
}
.adds {
  box-sizing: border-box;
  appearance: none;
  border: 2px solid black;
  background-color: transparent;
  border-radius: 0.6em;
  cursor: pointer;
  line-height: 1;
  margin: 20px;
  padding: 10px;
  margin-left: 900px;
  font-size: 20px;
}
.box-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding:2rem 0;
    width: 85%;
    margin:0 auto;
}
</style>
