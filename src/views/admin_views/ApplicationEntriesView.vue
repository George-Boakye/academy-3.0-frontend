<template>
  <the-layout>
    <template v-slot:side-nav>
      <SideNav />
    </template>
    <template v-slot:main-content>
      <div class="main">
        <h1>
          Entries - Batch 2 <img src="@/assets/entries-logo.svg" alt="logo" />
        </h1>
        <h2>Comprises of all that applied for batch 2</h2>

        <table style="width: 100%">
          <tr class="table-heading">
            <th>Name</th>
            <th>Email</th>
            <th>
              DOB - Age
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
            </th>
            <th>Adress</th>
            <th>University</th>
            <th>
              CGPA
              <img
                @click="gpaAscending"
                class="toparrow"
                src="@/assets/toparrow.svg"
                alt="toparrow"
                srcset=""
              />
              <img
                @click="gpaDescending"
                class="downarrow"
                src="@/assets/downarrow.svg"
                alt="downarrow"
                srcset=""
              />
            </th>
          </tr>
          <tr
            class="rowss"
            v-for="(row, index) in rows"
            v-bind:key="index"
            @click="showModal = true"
          >
            <td v-for="(rowItem, Itemindex) in row" v-bind:key="Itemindex">
              {{ rowItem }}
            </td>
          </tr>
        </table>
      </div>
    </template>
  </the-layout>
</template>
<script>
import SideNav from "@/components/AdminSideNav.vue";
import TheLayout from "@/components/TheLayout.vue";

export default {
  components: {
    SideNav,
    TheLayout,
  },
  data() {
    return {
      rows: [
        {
          name: "Afy Chinke",
          email: "ify@enyata.com",
          dob: "20",
          address: "3 Sabo Ave, Yaba, Lagos",
          university: "University of Nigeria",
          gpa: "15.0",
        },
        {
          name: "Zfy Chinke",
          email: "ify@enyata.com",
          dob: "21",
          address: "3 Sabo Ave, Yaba, Lagos",
          university: "University of Nigeria",
          gpa: "5.0",
        },
        {
          name: "Ify Chinke",
          email: "ify@enyata.com",
          dob: "19",
          address: "3 Sabo Ave, Yaba, Lagos",
          university: "University of Nigeria",
          gpa: "55.0",
        },
      ],
      columns: ["Name", "Email", "DOB - Age", "Adress", "University", "CGPA"],
    };
  },
  // mounted() {
  //   this.gpaAscending();
  // },
  methods: {
    gpaAscending() {
      this.rows.sort((a, b) => b.gpa - a.gpa);
    },

    gpaDescending() {
      this.rows.sort((a, b) => a.gpa - b.gpa);
    },
    ageAscending() {
      this.rows.sort((a, b) => b.dob - a.dob);
    },

    ageDescending() {
      this.rows.sort((a, b) => a.dob - b.dob);
    },
  },
};
</script>
<style scoped>
.downarrow {
  position: absolute;
  padding-top: 17px;
  padding-left: 0px;
}
.toparrow {
  padding-right: 0px;
}

table {
  border-collapse: collapse;
}
input {
  border: none;
  background-color: #2b3c4e;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
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
  padding-top: 10px;
}
td {
  padding: 24px 26px;
}
table {
  border-collapse: collapse;
}
img {
  padding-left: 14px;
  padding-bottom: 6px;
}
.main {
  margin-right: 40px;
}
tr {
  cursor: pointer;
  transition: 0.4s ease-in-out;
}
.rowss:hover {
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-left: 7px solid #7557d3;
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;
}
</style>
