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
            <h2>
              Click the button below to start assessment, you have limited time
              for this test
            </h2>
          </div>
          <div>
            <h3>Timer</h3>
            <h4>
              <span class="timer">00</span><span class="time-range">min</span
              ><span class="timer">000<span class="time-range">sec</span></span>
            </h4>
          </div>
        </div>
        <div class="body-section">
          <div class="hourglass">
            <img src="@/assets/hourglass.svg" alt="" srcset="" />
          </div>
          <div class="main-text">
            We have 4 days left until the next assessment<br />
            Watch this space
          </div>
          <div>
            <button @click="takeAssesment()">Take Assessment</button>
          </div>
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
  methods: {
    takeAssesment() {

      this.$router.push({ name: "questions" });
    },
  },
};
</script>
<style scoped>
.headsection {
  display: flex;
  justify-content: space-between;
  padding-right: 82px;
}
h1 {
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
  color: #2b3c4e;
}
h2 {
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
}
h3 {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 10px;
  color: #4f4f4f;
}
.timer {
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  color: #2b3c4e;
}
.time-range {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #4f4f4f;
}
.body-section {
  text-align: center;
  margin-top: 160px;
}
.hourglass {
  margin-bottom: 24px;
}

.main-text {
  font-weight: 400;
  font-size: 16.7273px;
  line-height: 20px;
  text-align: center;
  color: #4f4f4f;
  margin-bottom: 24px;
}
button {
  font-family: "Lato";
  background: #b1b1b1;
  border-radius: 4px;
  height: 41px;
  width: 205px;
  color: #ffffff;
  border: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
