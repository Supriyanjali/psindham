<template>
    <div>
        <Navbar/>
            <div class="header-2">
        <nav class="navbar">
                    <form action="" class="search-form">
            <input type="search" name="" placeholder="search here..." id="search-box" />
            <label for="search-box" class="fas fa-search"></label>

        </form>
        <router-link to="/merchant/addnewproduct"><button class="adds">Add New Products</button></router-link>
        </nav>
        <div class="box-container">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>

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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css");

* {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-decoration: none;
  text-transform: capitalize;
  transition: all 0.2s linear;
  transition: width none;
}
.header-2 .search-form {
  width: 50rem;
  height: 5rem;
  border: var(--border);
  overflow: hidden;
  background: white;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
}

.header-2 .search-form input {
  font-size: 1.6rem;
  padding: 0 1.2rem;
  height: 100%;
  width: 100%;
  text-transform: none;
  color: var(--black);
}

.header-2 .search-form label {
  font-size: 2.5rem;
  padding-right: 1.5rem;
  color: var(--black);
  cursor: pointer;
}

.header-2 .search-form label:hover {
  color: var(--black);
}

.header-2 .navbar {
  text-align: center;
  margin-top: 60px;
  margin-left: 500px;
}

.header-2 .navbar a {
  color: #fff;
  display: inline-block;
  padding: 1.2rem;
  font-size: 1.7rem;
}
.box-container{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    /* align-content:flex-start; */
    flex-wrap: wrap;
    padding:2rem 0;
    width: 85%;
    margin:0 auto;
}
.header-2 .adds {
  box-sizing: border-box;
  appearance: none;
  border: 2px solid black;
  background-color: transparent;
  border-radius: 0.6em;
  cursor: pointer;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  margin-left: 600px;
}
</style>
