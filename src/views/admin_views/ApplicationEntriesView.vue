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
            <th class="numbs">DOB - Age</th>
            <th>Adress</th>
            <th>University</th>
            <th class="numbs">CGPA</th>
          </tr>
          <tr @click="showModal = true">
            <td>Ify Chinke</td>
            <td>ify@enyata.com</td>
            <td>12/09/19 - 22</td>
            <td>3 Sabo Ave, Yaba, Lagos</td>
            <td>University of Nigeria</td>
            <td>5.0</td>
          </tr>
          <tr class="roll1">
            <td>Ify Chinke</td>
            <td>ify@enyata.com</td>
            <td>12/09/19 - 22</td>
            <td>3 Sabo Ave, Yaba, Lagos</td>
            <td>University of Nigeria</td>
            <td>5.0</td>
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
    return {};
  },
};
</script>
<style scoped>
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
</style>
