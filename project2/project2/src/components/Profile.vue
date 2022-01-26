<template>
  <div class="profile">
    <div class="centers">
      <img src="@/assets/profilepic.png" height="100px" width="150px" class="profilepic" />
      <h1>Details</h1>
    </div>
    <div class="details">
      <h3>Name:</h3><input type='text'/>
      <h3>Mobile Number:</h3><input type="tel" pattern="[789][0-9]{9}"/>
      <h3>Email Address:</h3><input type='text'>
      <h3>Bussiness Since:</h3><input type="number" >
      <h3>Ratings:</h3><input type="number" >
      <div class="buttons">
        <input type="submit" value="Edit Profile" />
        <input type="submit" value="Previous orders" />
      </div>
    </div>
  </div>
</template>
<style>
.profile {
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
.profile .details {
  display: flex;
  flex-direction: column;
  color: gray;
  margin: 20px;
  text-align: left;
}
.profile .centers {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile .submit {
  width: 300px;
  height: 40px;
}
.profile .buttons {
    margin-top:20px;
  text-align: center;
}
.profile input[type="submit"] {
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

.profile input[type="submit"]:hover {
  border-color: #2691d9;

  transition: 0.5s;
}
.profile .profilepic {
  padding: 20px;
}
</style>
