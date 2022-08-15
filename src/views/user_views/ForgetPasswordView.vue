<template>
  <div class="main">
    <div class="container">
      <div class="maintext1">Forgot Password</div>
      <div class="maintext2">
        Please select option to send link to reset password
      </div>
      <div class="email-reset">
        <img
          class="email-logo"
          src="@/assets/email-logo.svg"
          alt="email-logo"
          srcset=""
        />
        <div class="email-request">
          <h2>Reset via Email</h2>
          <h3>
            Reset password link will be send to your<br />
            registered email address.
          </h3>
        </div>

        <input type="checkbox" />
      </div>

      <div class="email-reset">
        <img
          class="email-logo"
          src="@/assets/telephone-logo.svg"
          alt="email-logo"
          srcset=""
        />
        <div class="email-request">
          <h4>Reset via Sms</h4>
          <h3>
            Reset password link will be send to your
            <br />
            registered phone number.
          </h3>
        </div>
      </div>
      <div class="send-button"><button>Send Link</button></div>
      <div class="end-text">Didn’t receive link?<span>Resend</span></div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
input[type="checkbox"] {
  cursor: pointer;
  height: 20px;
  width: 20px;
  background-color: rgb(207, 188, 188);
  border-style: 4px solid black;
  border-radius: 50%;
  margin-right: 40px;
}

input[type="checkbox"]:checked {
  border-radius: 50%;
}
.main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 623px;
  width: 614px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.maintext1 {
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 16px;
  color: #2b3c4e;
  text-align: center;
}
.maintext2 {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  text-align: center;
  color: #7d7d7d;
}
.email-reset {
  border-radius: 4px;
  padding: 2px;
  border: 3px solid #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  height: 130px;
  width: 498px;
  left: 471px;
  top: 358px;
  border-radius: 4px;
  margin-top: 48px;
  margin-bottom: 28px;
  gap: 24px;
}
.email-reset:hover {
  border: 3px solid #7557d3;
}

.email-logo {
  background-image: url("@/assets/tick-background.svg");
  background-repeat: no-repeat;
}
h2 {
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #7557d3;
}
h3 {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #b1b1b1;
}
h4 {
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #211f26;
}
button {
  background: #7557d3;
  border-radius: 4px;
  height: 50px;
  width: 379px;
  left: 0px;
  top: 0px;
  border-radius: 4px;
  border: none;
  color: white;
  margin-bottom: 24px;
}
.send-button {
  text-align: center;
}
.end-text {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #b1b1b1;
  text-align: center;
}
span {
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #7557d3;
  text-align: center;
}
</style>
