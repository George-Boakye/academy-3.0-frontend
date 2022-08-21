<template>
  <div class="container">
    <div class="logo-image">
      <img src="@/assets/enyata-logo.svg" alt="" srcset="" />
    </div>
    <div class="signup-text">
      <h1>Applicant Sign Up</h1>
    </div>
    <div class="form-wrapper">
      <div class="server-error" v-show="error">{{ error }}</div>
      <form
        @submit.prevent="createUser"
        class="label-form"
        action="/action_page.php"
      >
        <div class="uploads">
          <div>
            <input
              class="fileupload"
              type="file"
              id="file"
              name="cv"
              @keypress="clearError('cv')"
            />
            <label class="file-label" for="file"> + Upload CV</label>
            <p v-show="cvError">{{ cvError }}</p>
          </div>
          <div>
            <input
              class="fileupload"
              type="file"
              id="file"
              name="img"
              @keypress="clearError('img')"
            />
            <label class="file-label" for="file"> + Upload Photo</label>
            <p v-show="photoError">{{ photoError }}</p>
          </div>
        </div>
        <div class="mainform">
          <div class="inputs-wrapper">
            <div>
              <label>First Name</label>
              <input @keypress="clearError('fname')" />
              <p v-show="fnameError">{{ fnameError }}</p>
            </div>
            <div>
              <label>Last Name</label>
              <input @keypress="clearError('lname')" />
              <p v-show="lnameError">{{ lnameError }}</p>
            </div>

            <div>
              <label>Email</label>
              <input @keypress="clearError('email')" />
              <p v-show="emailError">{{ emailError }}</p>
            </div>
            <div>
              <label>Date of Birth</label>
              <input @keypress="clearError('dob')" />
              <p v-show="dobError">{{ dobError }}</p>
            </div>
            <div class="password-wrap">
              <label>Address</label>
              <input @keypress="clearError('address')" />
              <p v-show="addressError">{{ addressError }}</p>
            </div>

            <div class="password-wrap1">
              <label>University</label>
              <input @keypress="clearError('uni')" />
              <p>{{ universityError }}</p>
            </div>
            <div class="password-wrap">
              <label>Course of Study</label>
              <input @keypress="clearError('course')" />
              <p>{{ courseError }}</p>
            </div>

            <div class="password-wrap1">
              <label>CGPA</label>
              <input @keypress="clearError('cgpa')" />
              <p>{{ gpaError }}</p>
            </div>
          </div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        emailAddress: "",
        DOB: "",
        address: "",
        university: "",
        course: "",
        GPA: "",
        CV: null,
        photo: null,
      },

      fnameError: "",
      lnameError: "",
      emailError: "",
      dobError: "",
      addressError: "",
      universityError: "",
      courseError: "",
      gpaError: "",
      cvError: null,
      photoError: null,

      error: "",
    };
  },
  methods: {
    createUser() {
      this.user.firstName.length < 2
        ? (this.fnameError = "First name not valid!")
        : console.log(this.fnameError);
      this.user.lastName.length < 2
        ? (this.lnameError = "Last name not valid!")
        : console.log(this.username);
      !this.user.emailAddress.includes("@")
        ? (this.emailError = "Email address not valid!")
        : console.log(this.emailError);
      this.user.DOB.length < 1
        ? (this.dobError = "Select DOB!")
        : console.log(this.numberError);
      this.user.address.length < 8
        ? (this.addressError = "Include address!")
        : console.log(this.passwordError);
      this.user.university.length < 1
        ? (this.universityError = "Include university!")
        : console.log(this.confirmError);
      this.user.course.length < 1
        ? (this.courseError = "Include course!")
        : console.log(this.passwordError);
      this.user.GPA.length < 1
        ? (this.gpaError = "Input correct CGPA!")
        : console.log(this.confirmError);
      this.user.CV == null
        ? (this.cvError = "Upload your CV!")
        : console.log(this.passwordError);
      this.user.photo == null
        ? (this.photoError = "Upload your photo!")
        : console.log(this.confirmError);
      axios
        .post("http://localhost:3000/api/v1/auth/application", this.user)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          this.error = err.response.data.message;
        });
    },
    clearError(value) {
      this.fnameError && value == "fname" ? (this.fnameError = "") : false;
      this.lnameError && value == "lname" ? (this.lnameError = "") : false;
      this.emailError && value == "email" ? (this.emailError = "") : false;
      this.dob && value == "dob" ? (this.dob = "") : false;
      this.universityError && value == "uni"
        ? (this.universityError = "")
        : false;
      this.courseError && value == "course" ? (this.courseError = "") : false;
      this.cvError && value == "cv" ? (this.cvError = "") : false;
      this.photoError && value == "img" ? (this.photoError = "") : false;
      this.gpaError && value == "cgpa" ? (this.gpaError = "") : false;
      this.addressError && value == "address"
        ? (this.addressError = "")
        : false;
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
  font-weight: 700;
  height: 50px;
  width: 379px;
  border: none;
  margin-top: 40px;
  background: #7557d3;
  border-radius: 4px;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
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
p {
  margin-top: 5px;
  color: red;
  font-size: 12px;
  text-align: start;
}
.main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mainform {
  gap: 62px;
  justify-content: center;
}
.file-label {
  width: 211px;
  height: 49.97px;
  left: 494px;
  top: 328px;
  /* margin-right: 22px; */
  border: 1.5px dashed #2b3c4e;
  border-radius: 2.87205px;
  text-align: center;
  padding-top: 14px;
  cursor: pointer;
}
.fileupload {
  display: none;
}
.label-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.eye-logo1 {
  position: absolute;
  bottom: -14px;
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
.form-wrapper {
  padding: 53px 71px 39px 61px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.uploads {
  display: flex;
  gap: 0 32px;
}
.server-error {
  width: max-content;
  border-radius: 5px;
  background: #d68f8a;
  color: #fff;
  padding: 10px;
  align-self: center;
}
</style>
