<template>
  <div class="main-container">
    <div @click="close" class="background"></div>

    <div class="application-entries">
      <div class="profile-picture">
        <img :src="applicant.img" alt="app profile picture" />
      </div>
      <p class="modal-text">Personal Details</p>
      <hr />
      <div class="main-form">
        <div class="section-1">
          <label for="">Name</label>
          <input
            placeholder="Ify Chinke"
            v-model="fullName"
            type="text"
            readonly
          />

          <label for="">Address</label>
          <input
            placeholder="3 Sabo Ave, Yaba, Lagos"
            v-model="applicant.address"
            type="text"
            readonly
          />

          <label for="">Course of study</label>
          <input
            placeholder="Computer Science"
            readonly
            v-model="applicant.course"
            type="text"
          />

          <label for="">CGPA</label>
          <input
            placeholder="5.0"
            type="text"
            readonly
            v-model="applicant.cgpa"
          />

          <button v-show="applicant.status === 'Pending'" @click="approve">
            Approve
          </button>
        </div>

        <div class="section-2">
          <label for="">Email</label>
          <input
            placeholder="ify@enyata.com"
            type="text"
            readonly
            v-model="applicant.emailAddress"
          />

          <label for="">University</label>
          <input
            placeholder="University of Nigeria Nsukka"
            type="text"
            readonly
            v-model="applicant.university"
          />

          <label for="">Date of birth</label>
          <input
            placeholder="12/09/19 - 22"
            type="text"
            readonly
            v-model="applicantDate"
          />

          <label for="">CV</label>
          <input type="text" v-model="applicant.cv" />

          <button v-show="applicant.status === 'Pending'" @click="decline">
            Decline
          </button>
        </div>
      </div>
      <div
        :class="[
          applicant.status === 'Approved'
            ? 'status-approved'
            : 'status-declined',
          'status',
        ]"
        v-show="applicant.status !== 'Pending'"
      >
        <p>{{ applicant.status }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MainModal",
  data() {
    return {};
  },
  props: ["date", "age"],
  computed: {
    fullName() {
      return this.applicant.firstName + " " + this.applicant.lastName;
    },
    ...mapGetters({
      applicant: "getApplicant",
    }),
    applicantDate() {
      return `${this.date} - ${this.age}`;
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    approve() {
      this.$emit("approve");
    },
    decline() {
      this.$emit("decline");
    },
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  width: 100%;
  height: 100%;
}
.background {
  width: 80%;
  height: 1050px;
  background: rgba(3, 17, 49, 0.2);
  backdrop-filter: blur(8px);
}
.application-entries {
  width: 600px;
  background: #ffffff;
  padding: 95px 58px 145px 48px;
}
.profile-picture {
  width: 179px;
  height: 179px;
  margin-bottom: 42px;
  background-color: #7557d3;
}
.modal-text {
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #7d7d7d;
  margin-bottom: 14px;
}
hr {
  width: 498px;
  height: 1px;
  background: #f2f2f2;
  margin-bottom: 32px;
  border: none;
}
.main-form {
  display: flex;
  gap: 0 32px;
}
.main-form label {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #b1b1b1;
}
.main-form input {
  width: 231px;
  height: 48px;
  border-radius: 4px;
  margin-bottom: 36px;
  border: 1px solid #cdcfd6;
  border-radius: 4px;
}
.main-form button {
  width: 125px;
  height: 48px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  border-radius: 4px;
}
.section-1 button {
  background: #7557d3;
  color: #ffffff;
  border: 1px solid #cdcfd6;
  margin-left: 115px;
}
.section-2 button {
  color: #4f4f4f;
  border: 1px solid #cecece;
  background: #ffffff;
}
button {
  cursor: pointer;
}
input {
  padding: 14px 18px;
}
img {
  width: 100%;
  height: 100%;
}
.status-approved {
  color: #31d283;
}
.status-declined {
  color: red;
}
.status {
  text-align: center;
}
</style>
