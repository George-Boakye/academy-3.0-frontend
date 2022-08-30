<template>
  <MainModal
    @approve="openApproveButton"
    @decline="openDenyButton"
    @close="closeModal"
    v-show="mainModalVisibility"
    :date="applicantDate"
    :age="applicantAge"
    class="main-modal"
  ></MainModal>
  <DenyDecisionModal
    @close="closeDecisionModal"
    v-show="denyModalVisibility"
    class="deny-decision"
  ></DenyDecisionModal>
  <ApproveDecisionModal
    @close="closeDecisionModal"
    v-show="approveModalVisibility"
    class="approve-decision"
  ></ApproveDecisionModal>
  <the-layout>
    <template v-slot:side-nav>
      <SideNav />
    </template>
    <template v-slot:main-content>
      <div class="main">
        <h1>
          Entries - Batch 1 <img src="@/assets/entries-logo.svg" alt="logo" />
        </h1>
        <h2>Comprises of all that applied for batch 1</h2>

        <table style="width: 100%">
          <tr class="table-heading">
            <th>Name</th>
            <th>Email</th>
            <th class="th">
              <div class="th">
                <p>DOB - Age</p>
                <figure>
                  <img
                    @click="ageAscending"
                    class="toparrow"
                    src="@/assets/toparrow.svg"
                    alt="toparrow"
                    srcset=""
                  />

                  <img
                    @click="ageDescending"
                    class="downarrow"
                    src="@/assets/downarrow.svg"
                    alt="downarrow"
                    srcset=""
                  />
                </figure>
              </div>
            </th>
            <th>Address</th>
            <th>University</th>
            <th class="th">
              <div>
                <p>CGPA</p>
                <figure>
                  <img
                    @click="gpaAscending"
                    class="toparrow"
                    src="@/assets/toparrow.svg"
                    alt="toparrow"
                  />

                  <img
                    @click="gpaDescending"
                    class="downarrow"
                    src="@/assets/downarrow.svg"
                    alt="downarrow"
                  />
                </figure>
              </div>
            </th>
          </tr>
          <tr
            v-for="(candidate, index) in allApplicants"
            v-bind:key="index"
            @click="
              openMainModal();
              getEmail(index);
            "
            class="rowss"
          >
            <td>
              {{ candidate.details.firstName }} {{ candidate.details.lastName }}
            </td>
            <td>{{ candidate.details.emailAddress }}</td>
            <td>
              {{ date(candidate.details.dateOfBirth) }} -
              {{ age(candidate.details.dateOfBirth) }}
            </td>
            <td>{{ candidate.details.address }}</td>
            <td>{{ candidate.details.university }}</td>
            <td>{{ candidate.details.cgpa }}</td>
          </tr>
        </table>
      </div>
    </template>
  </the-layout>
</template>

<script>
import SideNav from "@/components/adminSideNav.vue";
import TheLayout from "@/components/TheLayout.vue";
import MainModal from "@/components/MainModal.vue";
import DenyDecisionModal from "@/components/DenyDecisionModal.vue";
import ApproveDecisionModal from "@/components/ApproveDecisionModal.vue";
import { mapActions, mapGetters } from "vuex";
import { differenceInYears, format } from "date-fns";

export default {
  name: "ApplicationEntries",
  components: {
    SideNav,
    TheLayout,
    DenyDecisionModal,
    MainModal,
    ApproveDecisionModal,
  },
  data() {
    return {
      mainModalVisibility: false,
      denyModalVisibility: false,
      approveModalVisibility: false,
      applicantDate: "",
      applicantAge: "",
    };
  },
  async created() {
    await this.applicants();
  },
  async updated() {
    const userId = localStorage.getItem("userDetails");
    await this.userDetails(userId);
    this.applicantDate = this.date(this.applicant.dateOfBirth);
    this.applicantAge = this.age(this.applicant.dateOfBirth);
  },
  computed: {
    ...mapGetters({
      allApplicants: "getApplicants",
      applicant: "getApplicant",
    }),
    age() {
      return (dob) => {
        const date = new Date(dob);
        const age = differenceInYears(new Date(), date);
        return age;
      };
    },
    date() {
      return (dob) => {
        const date = new Date(dob);
        return format(date, "dd/MM/yyyy");
      };
    },
  },
  methods: {
    openMainModal() {
      this.mainModalVisibility = true;
    },
    openDenyButton() {
      this.mainModalVisibility = false;
      this.denyModalVisibility = true;
    },
    openApproveButton() {
      this.mainModalVisibility = false;
      this.approveModalVisibility = true;
    },
    closeModal() {
      this.mainModalVisibility = false;
      localStorage.removeItem("userDetails");
    },
    closeDecisionModal() {
      this.approveModalVisibility = false;
      this.denyModalVisibility = false;
    },
    gpaAscending() {
      this.allApplicants.sort((a, b) => b.details.cgpa - a.details.cgpa);
    },

    gpaDescending() {
      this.allApplicants.sort((a, b) => a.details.cgpa - b.details.cgpa);
    },
    ageAscending() {
      this.allApplicants.sort(
        (a, b) => b.details.dateOfBirth - a.details.dateOfBirth
      );
    },

    ageDescending() {
      this.allApplicants.sort(
        (a, b) => a.details.dateOfBirth - b.details.dateOfBirth
      );
    },
    getEmail(index) {
      const userId = this.allApplicants[index]._id;
      localStorage.setItem("userDetails", userId);
    },
    ...mapActions(["applicants", "userDetails"]),
  },
};
</script>

<style lang="scss" scoped>
.toparrow {
  padding-bottom: 2px;
}
input {
  border: none;
  background-color: #2b3c4e;
}
/* .numbs {
  right: 130px;
} */
h1 {
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
h2 {
  font-style: italic;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  margin-top: 3px;
  margin-bottom: 38px;
  color: #4f4f4f;
}
.table-heading {
  width: 1042px;
  height: 46px;
  color: white;
  background: #2b3c4e;
  border-collapse: collapse;
}
td {
  padding: 24px 26px;
}
table {
  border-collapse: collapse;
}
img {
  cursor: pointer;
}
.main {
  margin-right: 40px;
}
.main-modal {
  position: absolute;
}
.deny-decision {
  position: absolute;
}

.approve-decision {
  position: absolute;
}
figure {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0;
  align-self: center;
}
tr {
  border-radius: 8px 0px 0px 8px;
}
.rowss:hover {
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-left: 7px solid #7557d3;
  border-radius: 8px 0px 0px 8px;
  margin-top: 20px;
  cursor: pointer;
}

.th div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 5px;
}
.th p {
  align-self: flex-end;
  // justify-self: center;
}
</style>
