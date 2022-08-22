<template>
  <div class="main">
    <div class="container">
      <div class="image">
        <img src="@/assets/enyata-logo.svg" alt="" />
      </div>
      <h1>Applicant Log In</h1>
      <div class="error" v-show="serverError">{{ serverError }} &#9888;</div>
      <form @submit.prevent="signIn">
        <label>Email Address</label>
        <input v-model="user.emailAddress" @keypress="clearError('email')" />
        <P v-show="emailError">{{ emailError }}</P>
        <div class="password-wrap">
          <label>Password</label>
          <input
            :type="inputTypeIcon"
            v-model="user.password"
            @keypress="clearError('password')"
          />
          <div class="icon" @click.prevent="toggleInputIcon">
            <span v-if="inputTypeIcon == 'password'">
              <div class="eye-logo">
                <img src="@/assets/password-eye-logo.svg" alt="" />
              </div>
            </span>
            <span v-else>
              <div class="eye-logo">
                <img src="@/assets/password-eye-logo.svg" alt="" />
              </div>
            </span>
          </div>
          <P v-show="passwordError">{{ passwordError }}</P>
        </div>
        <button type="submit">Sign In</button>
      </form>
      <div class="password-text">
        <div class="SignUp-text">
          Don’t have an account yet?<router-link to="/signUp"
            ><span>Sign Up</span></router-link
          >
        </div>
        <div class="forgotPassword" @click="$router.push('/forgot-password')">
          <a href="">Forgot Password?</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "LoginView",
  components: {},
  data() {
    return {
      user: {
        emailAddress: "",
        password: "",
      },
      inputType: "password",
      inputTypeIcon: "password",
      emailError: "",
      passwordError: "",
      serverError: "",
    };
  },
  methods: {
    signIn() {
      !this.user.emailAddress.includes("@")
        ? (this.emailError = "Email address not valid!")
        : true;
      this.user.password.length < 8
        ? (this.passwordError = "Password must be more than 8 characters!")
        : true;
      axios
        .post("http://localhost:3000/api/v1/auth/user/login", this.user)
        .then((res) => {
          console.log(res)
          const { data } = res.data;
          localStorage.setItem("token", data.token);
          localStorage.setItem('userId', data._id);
          if (data.applied === false) {
            this.$router.push("/pre-dashboard");
          } else {
            this.$router.push("/dashboard");
          }
        })
        .catch((err) => {
          // alert("Email or password wrong");
          this.serverError = err.response.data.message;
        });
    },
    clearError(value) {
      this.emailError && value == "email" ? (this.emailError = "") : false;
      this.passwordError && value == "password"
        ? (this.passwordError = "")
        : false;
      this.serverError = "";
    },
    toggleInputIcon() {
      this.inputTypeIcon =
        this.inputTypeIcon === "password" ? "text" : "password";
    },
  },
};
</script>
<style scoped>
.main {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
p {
  color: red;
  font-size: 12px;
  text-align: start;
  margin-top: 5px;
}
.password-wrap {
  position: relative;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.eye-logo {
  padding-right: 10px;
}

.icon {
  position: absolute;
  right: 0;
  top: 38px;
  cursor: pointer;
}

h1 {
  font-family: "Lato";
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 70px;
  color: #2b3c4e;
  text-align: center;
}

img {
  margin-bottom: 26px;
  text-align: center;
}

.image {
  text-align: center;
}

input {
  border: 1.5px solid #bdbdbd;
  border-radius: 4px;
  height: 48px;
  width: 379px;
  border-radius: 4px;
  margin-top: 3px;
  padding-right: 10px;
  padding-left: 5px;
}

label {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: block;
  text-align: start;
  margin-top: 20px;
  color: #4f4f4f;
}

button {
  font-family: "Lato";
  margin-top: 32px;
  border: none;
  height: 50px;
  width: 379px;
  border-radius: 4px;
  background: #7557d3;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
}

.SignUp-text,
.forgotPassword {
  font-family: "Lato";
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
  margin-top: 12px;
}

.password-text {
  display: flex;
  gap: 66px;
}
.error {
  padding: 10px;
  color: #fff;
  background: #d68f8a;
  width: max-content;
  border-radius: 5px;
}
.forgotPassword a {
  text-decoration: none;
  color: #4f4f4f;
}
</style>
