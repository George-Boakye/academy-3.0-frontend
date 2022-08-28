<template>
  <the-layout>
    <template v-slot:side-nav>
      <SideNav />
    </template>
    <template v-slot:main-content>
      <div class="main">
        <h1>
          Result - Batch 1 <img src="@/assets/entries-logo.svg" alt="logo" />
        </h1>
        <h2>Comprises of all that applied for batch 1</h2>

        <table style="width: 100%">
          <tr class="table-heading">
            <th>Name</th>
            <th>Email</th>
            <th class="th">
              <div>
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
            <th class="th">
              <div>
                <p>Test Scores</p>
                <figure>
                  <img
                    @click="testAscending"
                    class="toparrow"
                    src="@/assets/toparrow.svg"
                    alt="toparrow"
                    srcset=""
                  />
                  <img
                    @click="testDescending"
                    class="downarrow"
                    src="@/assets/downarrow.svg"
                    alt="downarrow"
                    srcset=""
                  />
                </figure>
              </div>
            </th>
          </tr>
          <tr
            class="rowss"
            v-for="(candidate, index) in allApplicants"
            v-bind:key="index"
            @click="showModal = true"
          >
            <td>
              {{ candidate.details.firstName }} {{ candidate.details.lastName }}
            </td>
            <td>{{ candidate.details.emailAddress }}</td>
            <td>{{ age(candidate.details.dateOfBirth) }}</td>
            <td>{{ candidate.details.address }}</td>
            <td>{{ candidate.details.university }}</td>
            <td>{{ candidate.details.cgpa }}</td>
            <td>{{ candidate.details.score }}</td>
          </tr>
        </table>
      </div>
    </template>
  </the-layout>
</template>
<script>
import SideNav from "@/components/adminSideNav.vue";
import TheLayout from "@/components/TheLayout.vue";
import { mapActions, mapGetters } from "vuex";
import { differenceInYears } from "date-fns";

export default {
  components: {
    SideNav,
    TheLayout,
  },
  data() {
    return {};
  },
  async created() {
    await this.applicants();
    console.log(this.allApplicants);
  },
  computed: {
    ...mapGetters({
      allApplicants: "getApplicants",
    }),
    age() {
      return (dob) => {
        const date = new Date(dob);
        const age = differenceInYears(new Date(), date);
        return age;
      };
    },
  },
  methods: {
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
    testAscending() {
      this.allApplicants.sort((a, b) => b.details.score - a.details.score);
    },

    testDescending() {
      this.allApplicants.sort((a, b) => a.details.score - b.details.score);
    },

    ...mapActions(["applicants"]),
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
  padding: 24px 6px;
}
table {
  border-collapse: collapse;
}
img {
  // display: block;
  cursor: pointer;
}
.main {
  margin-right: 40px;
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
.th {
  div {
    display: flex;
    align-items: center;
    // justify-content: center;
    gap: 0 5px;
  }
  p {
    align-self: flex-end;
  }
}
figure {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0;
  align-self: center;
}
</style>
