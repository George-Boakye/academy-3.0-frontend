<template>
  <div class="main">
    <div class="container">
      <div class="image">
        <img src="@/assets/enyata-logo.svg" alt="" />
      </div>
      <!-- '@/assets/password-eye-logo.svg' -->
      <h1>Applicant Log In</h1>
      <form @submit.prevent="signIn">
        <label>Email Address</label>
        <input v-model="user.emailAddress" />
        <P>{{ emailError }}</P>
        <div class="password-wrap">
          <label>Password</label>
          <input :type="inputTypeIcon" v-model="user.password" />
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
          <P>{{ passwordError }}</P>
        </div>
        <button type="submit">Sign In</button>
      </form>
      <div class="password-text">
        <div class="SignUp-text">
          Don’t have an account yet?<router-link to="/signUp"
            ><span>Sign Up</span></router-link
          >
        </div>
        <div class="forgotPassword">Forgot Password?</div>
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
    };
  },
  methods: {
    signIn() {
      !this.user.emailAddress.includes("@")
        ? (this.emailError = "Email address not valid!")
        : console.log(this.emailError);
      this.user.password.length < 10
        ? (this.passwordError = "enter your password!")
        : console.log(this.passworderror);
      axios
        .post("http://localhost:3000/api/v1/auth/user/login", this.user)
        .then((res) => {
          const { token } = res.data.data;
          const { user } = res.data.data;
          localStorage.setItem("token", token);
          console.log(res);
          if (user.applied === false) {
            this.$router.push("/pre-dashboard");
          } else {
            this.$router.push("/dashboard");
          }
        })
        .catch((err) => {
          alert("Email or password wrong");
          console.log(err);
        });
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
  font-size: 10px;
  text-align: start;
  margin-top: 5px;
}
.password-wrap {
  position: relative;
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
  margin-top: 32px;
  border: none;
  height: 50px;
  width: 379px;
  border-radius: 4px;
  background: #7557d3;
  border-radius: 4px;
  color: white;
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
</style>
