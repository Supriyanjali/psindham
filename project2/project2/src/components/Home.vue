<template>
    <div>
        <Navbar/>
        <div class="home"><img src="@/assets/graph.jpeg"/></div>
        <Footer/>
        </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import ProductCard from '@/components/ProductCard'
import Footer from '@/components/Footer'
export default {
  components: {
    Navbar,
    ProductCard,
    Footer
  }
}
</script>
<style>
.home{
    margin-top: 200px;
    margin-bottom: 200px;
}
</style>
