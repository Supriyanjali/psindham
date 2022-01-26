<template>
  <div class="signin">
    <h1>Login</h1>
    <form method="post">
      <div class="txt_field">
        <input type="text" required />
        <span></span>
        <label>Username</label>
      </div>
      <div class="txt_field">
        <input type="password" required />
        <span></span>
        <label>Password</label>
      </div>
      <div class="pass">
        <router-link to="/merchant/forgetpassword">Forgot Password?</router-link>
      </div>
      <input type="submit" value="Login" />
      <div class="or-container">
        <div class="line-separator"></div>
        <div class="or-label">OR</div>
        <div class="line-separator"></div>
      </div>
      <div>
        <button @click="login()" id="google-button" class="google btngoogle">
          <i class="fa fa-google"></i> &nbsp; Sign in with Google
        </button>
      </div>
      <!-- <button>Sign Up with google</button> -->
      <div class="signup_link">
        Not a member? <router-link to="/merchant/signup">SignUp</router-link>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      isLogin: false
    }
  },
  methods: {
    async login () {
      const googleUser = await this.$gAuth.signIn()
      console.log('googleUser', googleUser)
      console.log('getId', googleUser.getId())
      console.log('getBaseProfile', googleUser.getBasicProfile())
      console.log('getAuthResponse', googleUser.getAuthResponse())
      console.log('getAuthResponse$G', this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse())
      this.isLogin = this.$gAuth.isAuthorized
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Poppins:wght@400;500;600&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", Helvetica, Arial, sans-serif;
}
.signin {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: white;
  border-radius: 10px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);
}
.signin h1 {
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid silver;
}
.signin form {
  padding: 0 40px;
  box-sizing: border-box;
}
.signin form .txt_field {
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
}
.signin .txt_field input {
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}
.signin .txt_field label {
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: 0.5s;
}
.signin .txt_field span::before {
  content: "";
  position: absolute;
  top: 40px;
  left: 0;
  width: 0%;
  height: 2px;
  background: #2691d9;
  transition: 0.5s;
}
.signin .txt_field input:focus ~ label,
.signin .txt_field input:valid ~ label {
  top: -5px;
  color: #2691d9;
}
.signin .txt_field input:focus ~ span::before,
.signin .txt_field input:valid ~ span::before {
  width: 100%;
}
.signin .pass {
  margin: -5px 0 20px 5px;
  color: #a6a6a6;
  cursor: pointer;
  font-size: 15px;
}
.signin .pass:hover {
  text-decoration: underline;
}
.signin input[type="submit"] {
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
.signin input[type="submit"]:hover {
  border-color: #2691d9;
  transition: 0.5s;
}
.signin .signup_link {
  margin: 30px 0;
  text-align: center;
  font-size: 16px;
  color: #666666;
}
.signin .signup_link a {
  color: #2691d9;
  text-decoration: none;
}
.signin .signup_link a:hover {
  text-decoration: underline;
}
.signin .or-container {
  align-items: center;
  color: #adadad;
  display: flex;
  margin: 25px 0;
}

.signin .line-separator {
  background-color: #ccc;
  flex-grow: 5;
  height: 1px;
}

.signin .or-label {
  flex-grow: 1;
  margin: 0 10px;
  font-size: 15px;
  text-align: center;
}
.signin .google {
  background-color: #dd4b39;
  color: white;
}
.signin .btngoogle {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
  text-decoration: none; /* remove underline from anchors */
}
</style>
