<template>
  <div class="body">
    <div class="main">
      <div class="container">
        <h1 class="maintext1">Forgot Password</h1>
        <p class="maintext2">
          Please select option to send link to reset password
        </p>
        <div class="email-reset" @click="changeState('email')">
          <figure>
            <img
              class="email-logo"
              src="@/assets/email-logo.svg"
              alt="email-logo"
            />
          </figure>
          <div class="email-request">
            <h2>Reset via Email</h2>
            <h3>
              Reset password link will be send to your registered email address.
            </h3>
          </div>

          <div class="round">
            <input type="checkbox" :checked="state1" id="checkbox" />
            <label for="checkbox"></label>
          </div>
        </div>

        <div class="email-reset" @click="changeState('sms')">
          <figure>
            <img
              class="email-logo"
              src="@/assets/telephone-logo.svg"
              alt="email-logo"
            />
          </figure>
          <div class="email-request">
            <h2>Reset via Sms</h2>
            <h3>
              Reset password link will be send to your <br />
              registered phone number.
            </h3>
          </div>
          <div class="round">
            <input type="checkbox" :checked="state2" id="checkbox" />
            <label for="checkbox"></label>
          </div>
        </div>
        <div class="send-button"><button>Send Link</button></div>
        <p class="end-text">Didn’t receive link?<span> Resend</span></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      state1: false,
      state2: false,
    };
  },
  methods: {
    changeState(value) {
      if (value == "email") {
        this.state1 = !this.state1;
        this.state2 = false;
      } else if (value == "sms") {
        this.state2 = !this.state2;
        this.state1 = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
input[type="checkbox"]:checked {
  border-radius: 50%;
}

.body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main {
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  font-family: "Lato";
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
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 16px;
  color: #2b3c4e;
  text-align: center;
}

.maintext2 {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #7d7d7d;
}

.email-reset {
  border-radius: 4px;
  padding: 27px 32px 23px 28px;
  border: 1px solid #e8e8e8;
  display: flex;
  align-items: center;
  height: 130px;
  width: 498px;
  border-radius: 4px;
  margin-top: 48px;
  margin-bottom: 28px;
  gap: 0 24px;
  cursor: pointer;
}

.email-request {
  margin-right: 69px;
}

.email-reset:hover {
  border: 3px solid #7557d3;

  h2 {
    color: var(--primary-color);
  }
}

h2 {
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #211f26;
}

h3 {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #b1b1b1;
  width: 245px;
}

button {
  font-family: "Lato";
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  background: var(--primary-color);
  border-radius: 4px;
  height: 50px;
  width: 379px;
  border-radius: 4px;
  border: none;
  color: white;
  margin-bottom: 24px;
}

.send-button {
  text-align: center;
}

.end-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #b1b1b1;
  text-align: center;
}

span {
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #7557d3;
  text-align: center;
}

.round {
  position: relative;
}

.round label {
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 28px;
}

.round label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: 6px;
  left: 7px;
  opacity: 0;
  position: absolute;
  top: 8px;
  transform: rotate(-45deg);
  width: 12px;
}

.round input[type="checkbox"] {
  visibility: hidden;
}

.round input[type="checkbox"]:checked + label {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

.round input[type="checkbox"]:checked + label:after {
  opacity: 1;
}
</style>
