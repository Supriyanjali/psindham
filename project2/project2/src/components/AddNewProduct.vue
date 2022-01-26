<template>

  <div class="addnew">
      <h1>Product Details</h1>
    <div class="details">
      <h3>Image:</h3><input type="image" src="@/assets/Logo.png"  width="48" height="48">
      <h3>Product Name:</h3><input type='text'>
      <h3>Description:</h3><input type="text" >
      <h3>Quantity:</h3><input type="number" >
      <h3>Price:</h3><input type="number" >
      <h3>Category:</h3>
      <select name="categories" id="cars">
  <option value="Category1">Category1</option>
  <option value="Category2">Category2</option>
  <option value="Category3">Category3</option>
  <option value="Category4">Category4</option>
  <option value="Category5">Category5</option>
</select>

      <div class="buttons">
        <input type="submit" value="Save" />
      </div>
  </div>
  </div>
</template>
<style>
.addnew {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: white;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);
}
.addnew .details {
  display: flex;
  flex-direction: column;
  color: gray;
  margin: 20px;
  text-align: left;
}
.addnew .centers {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.addnew .submit {
  width: 300px;
  height: 40px;
}
.addnew .buttons {
    margin-top:20px;
  text-align: center;
}
.addnew input[type="submit"] {
  width: 40%;

  height: 50px;

  border: 1px solid;

  background:gray;

  border-radius: 20px;

  font-size: 18px;

  color: #e9f4fb;

  font-weight: 520;

  cursor: pointer;

  outline: none;
}

.addnew input[type="submit"]:hover {
  border-color: #2691d9;

  transition: 0.5s;
}
.addnew .addnewpic {
  padding: 20px;
}
</style>
