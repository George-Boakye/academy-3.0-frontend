<template>
  <the-layout>
    <template v-slot:side-nav>
      <SideNav />
    </template>
    <template v-slot:main-content>
      <div class="main">
        <h1>Assessment History</h1>

        <table style="width: 100%">
          <tr class="table-heading">
            <th>Batch</th>
            <th>Date Compsed</th>
            <th class="numbs">No of Questions</th>
            <th>Time Allocated</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>Batch 1</td>
            <td>12/07/94</td>
            <td>30</td>
            <td>30 mins</td>
            <td>Taken</td>
          </tr>
          <tr>
            <td>Batch 1</td>
            <td>12/07/94</td>
            <td>30</td>
            <td>30 mins</td>
            <td>Taken</td>
          </tr>
          <tr>
            <td>Batch 1</td>
            <td>12/07/94</td>
            <td>30</td>
            <td>30 mins</td>
            <td>Taken</td>
          </tr>
        </table>
      </div>
    </template>
  </the-layout>
</template>
<script>
import SideNav from "@/components/adminSideNav.vue";
import TheLayout from "@/components/TheLayout.vue";

export default {
  components: {
    SideNav,
    TheLayout,
  },
};
</script>
<style scoped>
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
  margin-bottom: 62px;
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
  padding: 24px 70px;
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
</style>
