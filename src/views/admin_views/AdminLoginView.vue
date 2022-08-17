<template>
  <div class="main">
    <div class="container">
      <div class="image">
        <img src="@/assets/enyata-logowhite.svg" alt="" srcset="" />
      </div>

      <h1>Admin Log In</h1>
      <form>
        <label>Email Address</label>
        <input />
        <div class="password-wrap">
          <label>Password</label>
          <input :type="inputTypeIcon" placeholder="" />
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
        </div>
        <button>Sign In</button>
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
  components: {},
  data() {
    return {
      user: {
        emailAddress: "",
        password: "",
      },
      inputType: "password",
      inputTypeIcon: "password",
    };
  },
  methods: {
    signIn() {
      axios
        .post("http://localhost:3000/api/v1/auth/admin/login", this.user)
        .then((res) => {
          const { token } = res.data.data;
          localStorage.setItem("admin-token", token);
          console.log(res);
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
  margin-top: 32px;
  border: none;
  height: 50px;
  width: 379px;
  border-radius: 4px;
  background: #ffff;
  border-radius: 4px;
  color: #7557d3;
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
