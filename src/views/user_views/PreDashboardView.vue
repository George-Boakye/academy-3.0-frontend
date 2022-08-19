<template>
  <div class="container">
    <div class="logo-image">
      <img src="@/assets/enyata-logo.svg" alt="" srcset="" />
    </div>
    <div class="signup-text">
      <h1>Applicant Sign Up</h1>
    </div>
    <form
      @submit.prevent="createUser"
      class="label-form"
      action="/action_page.php"
    >
      <div>
        <input class="fileupload" type="file" id="file" />
        <label class="file-label" for="file"> + Upload CV</label>
        <p>{{ CVerror }}</p>
      </div>
      <div>
        <input class="fileupload" type="file" id="file" name="filename" />
        <label class="file-label" for="file"> + Upload Photo</label>
        <p>{{ photoError }}</p>
      </div>
    </form>
    <div class="mainform">
      <form @submit.prevent="createUser">
        <div class="inputs-wrapper">
          <div>
            <label>First Name</label>
            <input />
            <p>{{ fnameError }}</p>
          </div>
          <div>
            <label>Last Name</label>
            <input />
            <p>{{ lastError }}</p>
          </div>

          <div>
            <label>Email</label>
            <input />
            <p>{{ emailError }}</p>
          </div>
          <div>
            <label>Date of Birth</label>
            <input />
            <p>{{ DOBerror }}</p>
          </div>
          <div class="password-wrap">
            <label>Address</label>
            <input />
            <p>{{ addressError }}</p>
          </div>

          <div class="password-wrap1">
            <label>University</label>

            <input />
            <p>{{ universityError }}</p>
          </div>
          <div class="password-wrap">
            <label>Course of Study</label>
            <input />
            <p>{{ courseError }}</p>
          </div>

          <div class="password-wrap1">
            <label>CGPA</label>
            <input />
            <p>{{ GPAerror }}</p>
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
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
      lastError: "",
      emailError: "",
      DOBerror: "",
      addressError: "",
      universityError: "",
      courseError: "",
      GPAerror: "",
      CVerror: null,
      photoError: null,
    };
  },
  methods: {
    createUser() {
      console.log(typeof this.user.phoneNumber);
      this.user.firstName.length < 2
        ? (this.fnameError = "first name not valid")
        : console.log(this.fnameError);
      this.user.lastName.length < 2
        ? (this.lastError = "Last name not valid")
        : console.log(this.username);
      !this.user.emailAddress.includes("@")
        ? (this.emailError = "Email address not valid")
        : console.log(this.emailError);
      this.user.DOB.length < 1
        ? (this.DOBerror = "Select DOB")
        : console.log(this.numberError);
      this.user.address.length < 8
        ? (this.addressError = "include address")
        : console.log(this.passwordError);
      this.user.university.length != this.user.confirmPassword
        ? (this.universityError = "Confirm Password not matching")
        : console.log(this.confirmError);
      this.user.course.length < 1
        ? (this.courseError = "include course")
        : console.log(this.passwordError);
      this.user.GPA.length < 1
        ? (this.GPAerror = "input correct CGPA")
        : console.log(this.confirmError);
      this.user.CV == null
        ? (this.CVerror = "upload your CV")
        : console.log(this.passwordError);
      this.user.photo == null
        ? (this.photoError = "upload your photo")
        : console.log(this.confirmError);
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
  bottom: 0%;
  height: 50px;
  width: 379px;
  left: 0px;
  top: 0px;
  border-radius: 4px;

  border: none;
  border-radius: 4px;
  margin-top: 40px;
  background: #7557d3;

  border-radius: 4px;
  color: #ffffff;
  text-align: center;
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
  color: red;
  font-size: 10px;
  text-align: start;
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
.file-label {
  width: 211px;
  height: 49.97px;
  left: 494px;
  top: 328px;
  margin-right: 22px;
  border: 1.5px dashed #2b3c4e;
  border-radius: 2.87205px;
  text-align: center;
  padding-top: 14px;
}
.fileupload {
  display: none;
}
.label-form {
  display: flex;
  justify-content: center;
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
</style>
