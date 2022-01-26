<template>
    <div class="signup">
      <h1>Sign Up</h1>
      <form method="post">
        <div class="txt_field">
          <input type="text" required />
            <span></span>
          <label>Full Name</label>
        </div>
        <div class="txt_field">
          <input type="email" required />
          <span></span>
          <label>Email Adress</label>
        </div>
        <div class="txt_field">
          <input type="tel" pattern="[789][0-9]{9}" required/>
          <span></span>
          <label>Phone Number:</label>
        </div>
        <div class="txt_field">
          <input type="number" required />
          <span></span>
          <label>Business Since</label>
        </div>
        <div class="txt_field">
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <div class="txt_field">
          <input type="password" required />
          <span></span>
          <label>Confirm Password</label>
        </div>
        <div>
            <p style="font-size: 12px">By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
        </div>
        <br>
        <input type="submit" value="Sign Up" />
        <div class="signup_link">Already a member? <router-link to="/merchant/signin">SignIn</router-link></div>
      </form>
    </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Poppins:wght@400;500;600&display=swapc");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", Helvetica, Arial, sans-serif;
}
.signup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  background: white;
  border-radius: 10px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);
}
.signup h1 {
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid silver;
}
.signup form {
  padding: 0 70px;
  box-sizing: border-box;
}
.signup form .txt_field {
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
}
.signup .txt_field input {
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}
.signup .txt_field label {
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: 0.5s;
}
.signup .txt_field span::before {
  content: "";
  position: absolute;
  top: 40px;
  left: 0;
  width: 0%;
  height: 2px;
  background: #2691d9;
  transition: 0.5s;
}
.signup .txt_field input:focus ~ label,
.signup .txt_field input:valid ~ label {
  top: -5px;
  color: #2691d9;
}
.signup .txt_field input:focus ~ span::before,
.signup .txt_field input:valid ~ span::before {
  width: 100%;
}
.signup .pass {
  margin: -5px 0 20px 5px;
  color: #a6a6a6;
  cursor: pointer;
}
.signup .pass:hover {
  text-decoration: underline;
}
.signup input[type="submit"] {
  width: 100%;
  height: 50px;
  border: 1px solid;
  background: #2691d9;
  border-radius: 25px;
  font-size: 18px;
  color: #e9f4fb;
  font-weight: 700;
  cursor: pointer;
  outline: none;
}
.signup input[type="submit"]:hover {
  border-color: #2691d9;
  transition: 0.5s;
}
.signup .signup_link {
  margin: 30px 0;
  text-align: center;
  font-size: 16px;
  color: #666666;
}
.signup .signup_link a {
  color: #2691d9;
  text-decoration: none;
}
.signup .signup_link a:hover {
  text-decoration: underline;
}
</style>
