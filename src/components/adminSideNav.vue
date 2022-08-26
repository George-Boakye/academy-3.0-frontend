<template>
  <nav>
    <div class="profile">
      <figure><img :src="admin.img" alt="" /></figure>
      <h1>{{ admin.firstName }} {{ admin.lastName }}</h1>
      <p>{{ admin.emailAddress }}</p>
    </div>
    <div class="links-container">
      <div class="links">
        <div>
          <router-link :to="{ name: 'admin-dashboard' }">
            <figure><img src="@/assets/dashboard-icon.svg" alt="" /></figure>
            <p>Dashboard</p>
          </router-link>
        </div>
        <div>
          <router-link :to="{ name: 'create-application' }">
            <figure><img src="@/assets/add-icon.svg" alt="" /></figure>
            <p>Create Application</p>
          </router-link>
        </div>
        <div>
          <router-link :to="{ name: 'application-entries' }">
            <figure>
              <img src="@/assets/application-entries-icon.svg" alt="" />
            </figure>
            <p>Application Entries</p>
          </router-link>
        </div>
        <div>
          <router-link :to="{ name: 'compose-assessment' }">
            <figure><img src="@/assets/assessment-icon.svg" alt="" /></figure>
            <p>Compose Assessment</p>
          </router-link>
        </div>
        <div>
          <router-link :to="{ name: 'assessment-history' }">
            <figure><img src="@/assets/history-icon.svg" alt="" /></figure>
            <p>Assessment History</p>
          </router-link>
        </div>
        <div>
          <router-link class="results" :to="{ name: 'results' }">
            <figure><img src="@/assets/results-icon.svg" alt="" /></figure>
            <p>Results</p>
          </router-link>
        </div>
        <div>
          <router-link :to="{ name: 'settings' }">
            <figure><img src="@/assets/settings-icon.svg" alt="" /></figure>
            <p>Settings</p>
          </router-link>
        </div>
      </div>

      <div class="logout" @click="logout">
        <figure><img src="@/assets/logout-icon.svg" alt="" /></figure>
        <p>Log Out</p>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AdminSideNav",
  async created() {
    const admin = localStorage.getItem("adminId");
    await this.userDetails(admin);
  },
  computed: {
    ...mapGetters({
      admin: "getApplicant",
    }),
  },
  methods: {
    logout() {
      localStorage.removeItem("admin-token");
      this.$router.push("/admin-login");
    },
    ...mapActions(["userDetails"]),
  },
};
</script>

<style lang="scss" scoped>
nav {
  font-family: "Lato";
  width: 292px;
  height: 100vh;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
}
.profile {
  background: var(--primary-color);
  height: 255px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 28px;
  color: #fff;

  figure {
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }

  h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.02em;
    margin-top: 13px;
    margin-bottom: 5px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
    font-style: italic;
  }
}

.links-container {
  .links {
    a {
      height: 49px;
      display: flex;
      align-items: center;
      gap: 0 21px;
      padding-left: 43px;
      text-decoration: none;
      color: #2b3c4e;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
    }

    a.router-link-exact-active {
      font-weight: 700;
      border-left: 4px solid #7557d3;
      &.results {
        border-left: 4px solid #31d283;
      }
    }
  }

  .logout {
    height: 49px;
    display: flex;
    align-items: center;
    gap: 0 21px;
    padding-left: 43px;
    color: #2b3c4e;
    margin-top: 57px;
    cursor: pointer;
  }
}
</style>
