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
          <div
            class="settings"
            :class="[component == 'Profile' ? 'active-tab' : '']"
            @click="toggle"
          >
            Admin Profile
          </div>
          <div
            class="settings"
            :class="[component == 'TimerSettings' ? 'active-tab' : '']"
            @click="toggle"
          >
            Timer Settings
          </div>
        </div>
        <keep-alive>
          <component :is="component" />
        </keep-alive>
      </div>
    </template>
  </the-layout>
</template>
<script>
import SideNav from "@/components/adminSideNav.vue";
import TheLayout from "@/components/TheLayout.vue";
import TimerSettings from "@/components/TimerSettings.vue";
import Profile from "@/components/AdminProfile.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    SideNav,
    TheLayout,
    TimerSettings,
    Profile,
  },
  data() {
    return {
      component: "Profile",
    };
  },
  async created(){
    const admin = localStorage.getItem("adminId");
    await this.adminInfo(admin)
    localStorage.setItem('seconds', this.admin.time)
  },
  computed:{
    ...mapGetters({
      admin: "getAdmin",
    }),
  },
  methods: {
    toggle() {
      this.component === "Profile"
        ? (this.component = "TimerSettings")
        : (this.component = "Profile");
    },
    ...mapActions(['adminInfo'])
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
  margin-bottom: 56px;
  cursor: pointer;
  padding: 24px 46px;
  width: 188px;
}
.setting-div {
  display: flex;
}
.active-tab {
  background: rgba(117, 87, 211, 0.1);
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
</style>
