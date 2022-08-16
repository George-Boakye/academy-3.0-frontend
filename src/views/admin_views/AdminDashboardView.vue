<template>
  <the-layout>
    <template v-slot:side-nav> <AdminSideNav></AdminSideNav></template>

    <template v-slot:main-content>
      <h2>Dashboard</h2>

      <div class="application-info">
        <div class="current-applications">
          <p>Current Applications</p>
          <h3>233</h3>
          <div></div>
          <p>Academy 2.0</p>
        </div>

        <div class="total-applications">
          <p>Total Applications</p>
          <h3>4253</h3>
          <div></div>
          <p>All entries so far</p>
        </div>
        <div class="academies">
          <p>Academy's</p>
          <h3>4</h3>
          <div></div>
          <p>So far</p>
        </div>
      </div>

      <div class="card-container">
        <div class="card-1">
          <h4>History</h4>
          <p>Last Update 18:24, 22/02/19</p>

          <div class="main">
            <table style="width: 100%">
              <tr>
                <td>Academy Batch 1</td>
                <td>15 students</td>
                <td>started 11/09/15</td>
              </tr>
              <tr>
                <td>Academy Batch 2</td>
                <td>15 students</td>
                <td>started 11/09/15</td>
              </tr>
              <tr>
                <td>Academy Batch 3</td>
                <td>15 students</td>
                <td>started 11/09/15</td>
              </tr>
            </table>
          </div>
        </div>

        <div class="card">
          <h4>Create Assessment</h4>
          <div class="assessment-container">
            <p>Create test question for incoming academy students</p>
            <button>Create Assessment</button>
          </div>
        </div>
      </div>
    </template>
  </the-layout>
</template>

<script>
import TheLayout from "@/components/TheLayout.vue";
import AdminSideNav from "@/components/adminSideNav.vue";

export default {
  components: {
    TheLayout,
    AdminSideNav,
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
    border: 1px solid #ececf9;
    border-radius: 4px;
    display: flex;
    flex-direction: column;

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

tr {
  padding: 24px 30px;
}
</style>
