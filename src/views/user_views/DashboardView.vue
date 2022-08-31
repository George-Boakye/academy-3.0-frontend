<template>
  <the-layout>
    <template v-slot:side-nav>
      <SideNav />
    </template>
    <template v-slot:main-content>
      <div>
        <h2>Dashboard</h2>
        <p>
          Your Application is currently being review, you wil be notified if
          successful
        </p>

        <div class="application-info">
          <div class="date">
            <p>Date of Application</p>
            <h3>{{ date }}</h3>
            <div></div>
            <p>{{ applicationDuration }} since applied</p>
          </div>
          <div class="status">
            <p>Application Status</p>
            <h3>{{ applicant.status }}</h3>
            <div></div>
            <p>We will get back to you</p>
          </div>
        </div>

        <div class="card-container">
          <div class="card-1">
            <h4>Updates</h4>
            <hr />
            <hr />
            <hr />
            <hr />
          </div>
          <div class="card">
            <h4>Take Assessment</h4>
            <div class="assessment-container">
              <p v-show="daysForTest >= 0">
                We have {{daysForTest}} days left until the next assessment Watch this space
              </p>
              <p v-show ="daysForTest == 0">
                You can now take the Assessment 
              </p>
              <button :disabled="daysForTest > 1">Take Assessment</button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </the-layout>
</template>

<script>
import SideNav from "@/components/UserSideNav.vue";
import TheLayout from "@/components/TheLayout.vue";
import { mapActions, mapGetters } from "vuex";
import { formatDistance, format, differenceInDays } from "date-fns";

export default {
  components: {
    SideNav,
    TheLayout,
  },
  async created() {
    const userId = localStorage.getItem("userId");
    await this.userDetails(userId);
  },
  mounted(){
    localStorage.setItem('timer', this.applicant.time)
  },
  computed: {
    ...mapGetters({
      applicant: "getApplicant",
    }),
    applicationDuration() {
      const date = formatDistance(
        new Date(this.applicant.createdAt),
        new Date()
      );
      return date;
    },
    date() {
      const date = new Date(this.applicant.createdAt);
      return format(date, "dd.MM.yy");
    },
    daysForTest(){
      return differenceInDays(new Date(2022,8,5,12,0,0), new Date())
    }
  },
  methods: {
    ...mapActions(["userDetails"]),
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  margin-bottom: 14px;
}

p {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
  font-style: italic;
}

.application-info {
  display: flex;
  gap: 0 87px;
  margin-top: 61px;

  .date {
    p {
      margin-bottom: 11px;
    }
    div {
      width: 148px;
      height: 4px;
      background: #006df0;
      border-radius: 4px;
      margin-bottom: 9px;
    }
  }

  .status {
    p {
      margin-bottom: 11px;
    }
    div {
      width: 148px;
      height: 4px;
      background: #f09000;
      border-radius: 4px;
      margin-bottom: 9px;
    }
  }

  h3 {
    margin-bottom: 11px;
    font-weight: 300;
    font-size: 48px;
    line-height: 58px;
  }
}

.card-container {
  margin-top: 97px;
  display: flex;
  gap: 0 67px;
  .card {
    padding: 25px 34px;
    width: 482px;
    // height: 453px;
    border: 1px solid #ececf9;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 144px 0;
  }

  .card-1 {
    padding: 25px 34px 99px 25px;
    width: 482px;
    // height: 453px;
    border: 1px solid #ececf9;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 74px 0;

    hr {
      height: 0;
      border: 1px solid #cecece;
      background: #cecece;
    }
  }
  .assessment-container {
    justify-self: center;
    align-self: center;
    text-align: center;
    p {
      font-style: normal;
      width: 342.91px;
      font-weight: 400;
      font-size: 16.7273px;
      line-height: 20px;
      text-align: center;
      color: #4f4f4f;
    }

    button {
      width: 205px;
      margin-top: 24px;
      height: 41px;
      color: #fff;
      background: #b1b1b1;
      border-radius: 4px;
      border: none;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      cursor: pointer;
    }
  }
}
</style>
