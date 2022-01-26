<template>
  <div class="box">
<div class="image">
      <img :src='product.image' alt="" />
    </div>
    <div class="info">
      <router-link :to ="{name: 'ProductDetail', params: {id: product.id}}"><h3>{{ product.title }}</h3></router-link>
      <div class="subInfo">
        <strong class="price"> ₹{{ product.price }} </strong>
        <div class="btn-box">
          <a class="quantity">
            <b>Quantity Left:</b></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['product'],
  name: 'ProductCard'
}
</script>
<style>
.box {
  flex: 1 1 30rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
  margin: 1rem 2rem;
}
.box .image {
  height: 20rem;
  padding: 2rem;
  text-align: center;
  background: #f0f0f0;
}

.box .image img {
  height: 100%;
  width: 80%;
  object-fit: cover;
}

.box .info h3 {
  padding: 1rem;
  font-size: 2rem;
  color: var(--blue);
}

.box .info .subInfo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-top: 0.1rem solid rgba(0, 0, 0, 0.3);
}

.box .info .subInfo .price {
  color: #ff3300;
  font-size: 2rem;
}

.info .subInfo .price span {
  color: #666;
  font-size: 1.5rem;
  text-decoration: line-through;
}

/* .product .box-container .box .info .subInfo .stars i{
    color:orange;
    font-size: 1.5rem;
} */
.box .btn-sm {
  width: 150px;
  height: 40px;
  text-align: center;
  padding-top: 5px;
}
.box a b {
    font-size: 18px;
  color: grey;
}
</style>
