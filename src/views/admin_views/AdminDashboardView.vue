<template>
  <the-layout>
    <template v-slot:side-nav>
      <SideNav />
    </template>

    <template v-slot:main-content>
      <div>
        <h2>Dashboard</h2>

        <div class="application-info">
          <div class="current-applications">
            <p>Current Applications</p>
            <h3>{{ allApplicants.length }}</h3>
            <div></div>
            <p class="small-letters">Academy 1.0</p>
          </div>

          <div class="total-applications">
            <p>Total Applications</p>
            <h3>{{ allApplicants.length }}</h3>
            <div></div>
            <p class="small-letters">All entries so far</p>
          </div>
          <div class="academies">
            <p>Academy's</p>
            <h3>{{ batches.length }}</h3>
            <div></div>
            <p class="small-letters">So far</p>
          </div>
        </div>

        <div class="card-container">
          <div class="card-1">
            <h4>History</h4>
            <p>Last Update 18:24, 22/08/22</p>

            <div class="main">
              <table style="width: 100%">
                <div>
                  <tr>
                    <td>Academy Batch 1</td>
                    <td class="mid-table">15 students</td>
                    <td>started 11/08/22</td>
                  </tr>
                </div>
              </table>
            </div>
          </div>

          <div class="card">
            <h4>Create Assessment</h4>
            <div class="assessment-container">
              <p>Create test question for incoming academy students</p>
              <button @click="$router.push('/compose-assessment')">
                Create Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </the-layout>
</template>

<script>
import SideNav from "@/components/adminSideNav.vue";
import TheLayout from "@/components/TheLayout.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    TheLayout,
    SideNav,
  },
  async created() {
    await this.applicants();
    await this.allBatches();
  },
  computed: {
    ...mapGetters({
      allApplicants: "getApplicants",
      batches: "getBatches",
    }),
  },
  methods: {
    ...mapActions(["applicants", "allBatches"]),
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
h3 {
  margin-bottom: 11px;
  font-weight: 300;
  font-size: 48px;
  line-height: 65px;
  color: #2b3c4e;
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

  .current-applications {
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

  .total-applications {
    p {
      margin-bottom: 11px;
    }

    div {
      width: 148px;
      height: 4px;
      background: #00f026;
      border-radius: 4px;
      margin-bottom: 9px;
    }
  }

  .academies {
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
}

.card-container {
  margin-top: 97px;
  display: flex;
  gap: 0 67px;

  .card {
    height: 307px;
    padding: 26px 31px;
    width: 482px;
    border: 1px solid #ececf9;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 70px 0;
  }

  .card-1 {
    width: max-content;
    border-radius: 4px;
    display: flex;
    flex-direction: column;

    hr {
      height: 0;
      border: 1px solid #cecece;
      background: #cecece;
    }

    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      margin-top: 4px;
      color: #4f4f4f;
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
      font-family: "Lato";
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

table {
  div {
    & :hover {
      border-left: 7px solid #7557d3;
      box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
      border-radius: 8px;
    }
  }
}
tr {
  display: flex;
  padding: 24px 30px;
  .mid-table {
    margin-right: 39px;
    margin-left: 55px;
  }
}

td {
  display: block;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #4f4f4f;
}

.small-letters {
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #4f4f4f;
}
</style>
