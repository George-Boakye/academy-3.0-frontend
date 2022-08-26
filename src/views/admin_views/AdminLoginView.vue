<template>
  <div class="main">
    <div class="container">
      <div class="image">
        <img src="@/assets/enyata-logowhite.svg" alt="" srcset="" />
      </div>

      <h1>Admin Log In</h1>
      <form @submit.prevent="signIn()">
        <label>Email Address</label>
        <input v-model="user.emailAddress" />
        <P v-show="emailError">{{ emailError }}</P>
        <div class="password-wrap">
          <label>Password</label>
          <input :type="inputTypeIcon" placeholder="" v-model="user.password" />
          <div class="icon" @click.prevent="toggleInputIcon">
            <span v-if="inputTypeIcon == 'password'">
              <div class="eye-logo">
                <img src="@/assets/password-eye-logo.svg" alt="" srcset="" />
              </div>
            </span>
            <span v-else>
              <div class="eye-logo">
                <img
                  src="@/assets/password-eye-logo-white.svg"
                  alt=""
                  srcset=""
                />
              </div>
            </span>
          </div>
          <P v-show="passwordError">{{ passwordError }}</P>
        </div>
        <button type="submit">Sign In</button>
      </form>
      <div class="admin-bg-img">
        <img src="@/assets/admin-login-Bg.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AdminLoginView",
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
      this.user.password.length < 8
        ? (this.passwordError = "Password must be more than 8 charcacters!")
        : console.log(this.passworderror);
      axios
        .post("http://localhost:3249/api/v1/auth/admin/login", this.user)
        .then((res) => {
          console.log(res);
          const { token, _id } = res.data.data;
          localStorage.setItem("admin-token", token);
          localStorage.setItem("adminId", _id);
          if (res.data.data.is_admin == true) {
            this.$router.push("/admin-dashboard");
          } else {
            this.$router.push("/admin-login");
          }
        })
        .catch((err) => {
          alert("Email or password wrong");
          console.log(err);
        });
    },
    toggleInputIcon() {
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
  background: #7557d3;
  /* padding-top: 106px;
  padding-bottom: 96px; */
}
p {
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
  color: #ffffff;
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
  color: #fff;
  background-color: #7557d3;
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
  color: #ffff;
}

button {
  font-family: "Lato";
  margin-top: 32px;
  border: none;
  height: 50px;
  width: 379px;
  border-radius: 4px;
  background: #ffff;
  border-radius: 4px;
  color: #7557d3;
  cursor: pointer;
}

.password-text {
  display: flex;
  gap: 66px;
}

.admin-bg-img {
  position: absolute;
  top: 106px;
  right: 0;
}
</style>
