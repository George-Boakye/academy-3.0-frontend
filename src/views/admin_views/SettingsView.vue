<template>
  <the-layout>
    <template v-slot:side-nav>
      <SideNav />
    </template>
    <template v-slot:main-content>
      <div class="main">
        <h1>Profiles and Settings</h1>
        <h2>Helps you set admin profile and give other users permissions</h2>
        <div class="setting-div">
          <div class="settings">Admin Profile</div>
          <div class="settings">Timer Settings</div>
        </div>
        <h3>Timer Setting</h3>
        <hr />
        <h4>Set Time</h4>
        <div class="time">
          <h5>00</h5>
          <p>min</p>
          <img src="@/assets/entries-logo.svg" alt="" srcset="" />
          <h5>000</h5>
          <p>sec</p>
          <img src="@/assets/entries-logo.svg" alt="" srcset="" />
        </div>
        <button>Save</button>
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
h1 {
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;

  color: #2b3c4e;
}
h2 {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #202f44;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-top: 16px;
  margin-bottom: 86px;
}
.settings {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #333758;
  mix-blend-mode: normal;
  margin-bottom: 56px;
}
h3 {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.4px;
  color: #4a4a4a;
}
h4 {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
}
h5 {
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  color: #2b3c4e;
}
hr {
  width: 724px;
  height: 1px;
  left: 340px;
  top: 432px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  margin-top: 16px;
  margin-bottom: 100px;
}
p {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  padding-top: 38px;
  color: #4f4f4f;
}
button {
  background: #7557d3;
  border-radius: 3px;
  height: 38px;
  width: 127px;
  border-radius: 3px;
  color: white;
  border: none;
  cursor: pointer;
}

.setting-div {
  display: flex;
  gap: 100px;
}
.time {
  display: flex;
  margin-top: 10px;
  margin-bottom: 34px;
}
img {
  padding: 10px 40px 0px 10px;
}
</style>
