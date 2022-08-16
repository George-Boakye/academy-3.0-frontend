<template>
  <div class="main">
    <div class="container">
      <div class="image">
        <img src="@/assets/enyata-logowhite.svg" alt="" srcset="" />
      </div>

      <div class="admin-bg-img">
        <img src="@/assets/admin-login-Bg.svg" alt="" />
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
      </form>
      <button>Sign In</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminLoginView",
  components: {},
  data() {
    return {
      inputType: "password",
      inputTypeIcon: "password",
    };
  },
  methods: {
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
