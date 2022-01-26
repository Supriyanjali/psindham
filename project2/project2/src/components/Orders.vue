<template>
<div>
    <Navbar/>
  <div class="mains">
    <h1>Order details</h1>
    <div class="orders">
    <div class="details">
      <h3>Product Name:</h3><input type='text'/>
      <h3>Price:</h3><input type="number" />
      <h3>Ordered By:</h3><input type='text'>
      <h3>Quantity:</h3><input type="number" >
      <h3>Address</h3><input type="text" >
      <h3>Total Price</h3><input type="number" >
      <div class="buttons">
        <input type="submit" value="confirm order" />
        </div>
    </div>
        <div>
          <h2>Number of Orders</h2>
          <h2>2</h2>
        <button href="#">Confirm all </button>
        </div>
    </div>
  </div>
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
.orders
{
  display: flex;
}
input[type="submit"] {
  width: 40%;

  height: 50px;

  border: 1px solid;

  background:gray;

  border-radius: 20px;

  font-size: 18px;

  color: #3597d4;

  font-weight: 520;

  cursor: pointer;

  outline: none;
}
</style>
