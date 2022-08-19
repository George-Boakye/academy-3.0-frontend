<template>
  <div class="main">
    <div class="container">
      <div class="logo-image">
        <img src="@/assets/enyata-logo.svg" alt="" srcset="" />
      </div>
      <div class="signup-text">
        <h1>Applicant Sign Up</h1>
      </div>
      <div class="mainform">
        <form @submit.prevent="createUser">
          <div class="inputs-wrapper">
            <div>
              <label>First Name</label>
              <input v-model="user.firstName" />
              <p>{{ fnameError }}</p>
            </div>

            <div>
              <label>Last Name</label>
              <input v-model="user.lastName" />
              <p>{{ lastError }}</p>
            </div>

            <div>
              <label>Email Address</label>
              <input v-model="user.emailAddress" />
              <p>{{ emailError }}</p>
            </div>

            <div>
              <label>Phone Number</label>
              <input v-model="user.phoneNumber" type="tel" />
              <p>{{ numberError }}</p>
            </div>
            <div class="password-wrap">
              <label>Password</label>
              <input :type="inputTypeIcon" v-model="user.password" />
              <p>{{ passwordError }}</p>
              <div class="icon" @click.prevent="toggleInputIcon">
                <span v-if="inputTypeIcon == 'password'"
                  ><div class="eye-logo2">
                    <img
                      src="@/assets/password-eye-logo.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                </span>
                <span v-else
                  ><div class="eye-logo2">
                    <img
                      src="@/assets/password-eye-logo.svg"
                      alt=""
                      srcset=""
                    /></div
                ></span>
              </div>
              <span v-if="msg.password">{{ msg.password }}</span>
            </div>

            <div class="password-wrap1">
              <label>Confirm Password</label>
              <input :type="inputTypeIcon" v-model="user.confirmPassword" />
              <p>{{ confirmError }}</p>
              <div class="icon" @click.prevent="toggleInputIcon">
                <span v-if="inputTypeIcon == 'password'"
                  ><div class="eye-logo1">
                    <img
                      src="@/assets/password-eye-logo.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                </span>
                <span v-else
                  ><div class="eye-logo1">
                    <img
                      src="@/assets/password-eye-logo.svg"
                      alt=""
                      srcset=""
                    /></div
                ></span>
              </div>
            </div>
          </div>
          <button type="submit">Sign Up</button>
        </form>

        <h2>
          Already have an account?<router-link to="/login"
            ><span> Sign In</span></router-link
          >
        </h2>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignUpView",
  components: {},
  props: {},
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      },
      fnameError: "",
      lastError: "",
      emailError: "",
      numberError: "",
      passwordError: "",
      confirmError: "",
      msg: [],
      // inputType: "password",
      inputTypeIcon: "password",
    };
  },
  methods: {
    toggleInputIcon() {
      this.inputTypeIcon =
        this.inputTypeIcon === "password" ? "text" : "password";
    },
    createUser() {
      console.log(typeof this.user.phoneNumber);
      this.user.firstName.length < 2
        ? (this.fnameError = "first name not valid")
        : console.log(this.fnameError);
      this.user.lastName.length < 2
        ? (this.lastError = "Last name not valid!")
        : console.log(this.username);
      !this.user.emailAddress.includes("@")
        ? (this.emailError = "Email address not valid!")
        : console.log(this.emailError);
      this.user.phoneNumber.length < 10
        ? (this.numberError = "Phone number not valid!")
        : console.log(this.numberError);
      this.user.password.length < 8
        ? (this.passwordError = "password must be more than 8 characters!")
        : console.log(this.passwordError);
      this.user.password != this.user.confirmPassword
        ? (this.confirmError = "Confirm Password not matching!")
        : console.log(this.confirmError);
      axios
        .post("http://localhost:3030/api/v1/user/signup", this.user)
        .then((res) => {
          console.log(res);
          this.$router.push("/login");
        })
        .catch((err) => console.log(err));
    },
    validateEmail(value) {
      /* eslint-disable */
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msg["emailAddress"] = "";
      } else {
        this.msg["emailAddress"] = "Invalid Email Address";
      }
    },
  },
  watch: {
    emailAddress(value) {
      // binding this to the data value in the email input
      this.email = value;
      this.validateEmailAddress(value);
    },
  },
};
</script>
<style scoped>
img {
  margin-top: 100px;
  margin-bottom: 26px;
}
button {
  font-family: "Lato";
  font-size: 16px;
  line-height: 19px;
  height: 50px;
  width: 520px;
  border: none;
  border-radius: 4px;
  margin-top: 40px;
  background: #7557d3;
  border-radius: 4px;
  color: #ffffff;
  text-align: center;
}
p {
  color: red;
  font-size: 10px;
  text-align: start;
  margin-top: 5px;
}
h1 {
  font-family: "Lato";
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 70px;
  text-align: center;
  color: #2b3c4e;
}
/* .img {
  text-align: center;
} */
.logo-image {
  text-align: center;
}
input {
  width: 379px;
  height: 48px;
  left: 767px;
  top: 394px;
  margin-top: 3px;
  border: 1.5px solid #bdbdbd;
  border-radius: 4px;
  padding-left: 10px;
}
label {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  margin-top: 20px;
  color: #4f4f4f;
}
.main {
  /* margin: 220px 310px 276px 276px; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mainform {
  gap: 62px;
  justify-content: center;
}

.eye-logo1 {
  position: absolute;
  bottom: -8px;
  right: 14px;
  cursor: pointer;
}
.password-wrap1 {
  position: relative;
}

.password-wrap {
  position: relative;
}
.eye-logo2 {
  top: -40px;
  left: 350px;
  position: absolute;
  cursor: pointer;
}

label {
  display: block;
  text-align: start;
}
h2 {
  font-family: "Lato";
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
  margin-top: 12px;
  text-align: center;
}
form {
  text-align: center;
}
.inputs-wrapper {
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 22px 62px;
  justify-content: center;
}
span {
  color: #1a2c56;
}
</style>
