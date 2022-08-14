<template>
  <the-layout>
    <template v-slot:side-nav>
      <SideNav />
    </template>
    <template v-slot:main-content>
      <div class="main">
        <div class="headsection">
          <div>
            <h1>Take Assessment</h1>
            <h2>Thank you!</h2>
          </div>
          <div>
            <h3>Timer</h3>
            <h4>
              <span class="timer">23</span><span class="time-range">min</span
              ><span class="timer">043<span class="time-range">max</span></span>
            </h4>
          </div>
        </div>
        <div class="midsection">
          <div class="confetti-image">
            <img src="@/assets/confetti.svg" alt="" srcset="" />
          </div>
          <div class="mid-text">
            We have received your assessment test, we will get back to you
            soon.<br />
            Best of luck
          </div>
          <div class="Home-button"><button>Home</button></div>
        </div>
      </div>
    </template>
  </the-layout>
</template>
<script>
import SideNav from "@/components/UserSideNav.vue";
import TheLayout from "@/components/TheLayout.vue";

export default {
  components: {
    SideNav,
    TheLayout,
  },
};
</script>
<style scoped>
.headsection {
  display: flex;
  gap: 280px;
}
h1 {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
  color: #2b3c4e;
}
h2 {
  font-family: "Lato";
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #2b3c4e;
}
h3 {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  margin-bottom: 10px;

  color: #4f4f4f;
}
.timer {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  color: #2b3c4e;
}
.time-range {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #4f4f4f;
}
h5 {
  font-family: "Lato";
  font-style: italic;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
}
.midsection {
  text-align: center;
  margin-top: 128px;
}
.mid-text {
  margin-top: 24px;
  margin-bottom: 34px;
}
button {
  height: 41px;
  width: 205px;
  left: 0px;
  top: 0px;
  border-radius: 4px;
  background-color: #7557d3;
  border: none;
}
</style>
