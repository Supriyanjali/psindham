<template>
  <div class="header-1">
    <nav class="navbar">
      <span href="#" class="logo"><img class="logo" src="@/assets/Logo.png" heigth="30px" width="180px"/></span>
      <span class="hov" href="#home"><router-link to="/merchant/home">home</router-link></span>
      <span class="hov" href="#categories" ><router-link to="/merchant/orders">Orders</router-link></span>
      <span class="hov" href="#aboutus"><router-link to="/merchant/product">Products</router-link></span>
        <router-link to="/merchant/signin"><a class="btn btn-white">Login</a></router-link>
        <router-link to="/merchant/profile"><div id="login-btn" class="fas fa-user" style="color: white"></div></router-link>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Navbar'
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css");

:root {
  --green: rgba(148, 143, 143, 0.014);
  --dark-color: rgba(0, 0, 0, 0.945);
  --black: #444;
  --light-color: #666;
  --border: 0.1rem solid rgba(0, 0, 0, 0.1);
  --border-hover: 0.1rem solid var(--black);
  --box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}

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

html {
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-padding-top: 5rem;
  scroll-behavior: smooth;
}
.header-1 {
      display: flex;
  background: black;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
}

.header-1 .logo {
  font-size: 2.5rem;
  font-weight: bolder;
  color: var(--black);
}
.header-1 div {
  font-size: 2.5rem;
  margin-left: 15px;
  color: var(--black);
  cursor: pointer;
  margin-top: 12px;
  margin-right: 10px;
}
.header-1 .navbar {
  text-align: center;
   margin-left: 100px;
}

.header-1 .navbar a {
  color: #fff;
  display: inline-block;
  padding: 10px;
  font-size: 1.7rem;
  align-items: center;
  margin-left: 40px;
}
.header-1 .navbar span {
  color: #fff;
  display: inline-block;
  padding: 20px;
  font-size: 10px;
  margin-left: 15px;
  margin-right: 15px;
}
.header-1 .navbar .hov a:hover {
  background: var(--light-color);
}

.header-1 .active {
      position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.header-1 .btn-white {
  border: solid 1px #fff;

  background: transparent;

  color: #fff !important;

  padding: 2px;

  font-size: 2px;
  margin-bottom: 20px;
}

.header-1 .btn-white:hover {
  border: solid 1px #fff;

  background: #fff;

  color: #1f1f1f !important;
}
</style>
