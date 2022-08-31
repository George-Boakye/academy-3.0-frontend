<template>
  <div class="main">
    <h3>Timer Setting</h3>
    <hr />
    <h4>Set Time</h4>
    <form @submit.prevent="save()">
      <div class="time">
        <div class="select">
          <div class="minute">
            <select name="minute" id="" v-model="selectMinute">
              <option :value="min" v-for="(min, index) in minutes" :key="index">
                {{ min }}
              </option>
            </select>
          </div>
          <div class="min">
            <p>min</p>
          </div>
        </div>
        <div class="select">
          <div class="seconds">
            <select name="seconds" id="" v-model="selectSeconds">
              <option :value="sec" v-for="(sec, index) in seconds" :key="index">
                {{ sec }}
              </option>
            </select>
          </div>
          <div class="sec">
            <p>sec</p>
          </div>
        </div>
      </div>
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { intervalToDuration } from "date-fns";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selectMinute: "",
      selectSeconds: "",
      admin: {
        time: null,
      },
    };
  },
  updated() {
    const seconds = localStorage.getItem("seconds");
    console.log(seconds);
    this.admin.time = this.time;
  },
  mounted() {
    this.selectMinute = this.getTime.min;
    this.selectSeconds = this.getTime.sec;
  },
  computed: {
    minutes() {
      let minutes = [];
      for (let i = 0; i <= 60; i++) {
        if (i < 10) {
          i = i.toString().padStart(2, "0");
        }
        minutes.push(i);
      }
      return minutes;
    },
    seconds() {
      let seconds = [];
      for (let i = 0; i < 60; i++) {
        i = i.toString().padStart(3, "0");

        seconds.push(i);
      }
      return seconds;
    },
    time() {
      const time = `${this.selectMinute}:${this.selectSeconds}`;
      const minutes = time.slice(0, 2);
      const seconds = time.slice(3);
      const sec = minutes * 60;
      return Number(sec) + Number(seconds);
    },
    getTime() {
      const seconds = localStorage.getItem("seconds");
      const duration = intervalToDuration({ start: 0, end: seconds * 1000 });
      return {
        min: duration.minutes,
        sec: duration.seconds.toString().padStart(3, "0"),
      };
    },
    ...mapGetters({
      admin: "getAdmin",
    }),
  },
  methods: {
    save() {
      const token = localStorage.getItem("admin-token");
      axios
        .put("http://localhost:3000/api/v1/auth/applicants", this.admin, {
          headers: {
            Authorization: `Basic ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          throw error;
        });

      const adminId = localStorage.getItem("adminId");
      axios
        .put(
          `http://localhost:3000/api/v1/auth/admin/timer/${adminId}`,
          this.admin,
          {
            headers: {
              Authorization: `Basic ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          throw error;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.setting-div {
  display: flex;
  gap: 100px;
}
.time {
  display: flex;
  gap: 0 40px;
  margin-top: 10px;
  margin-bottom: 34px;
}
img {
  padding: 10px 40px 0px 10px;
}
button {
  background: #7557d3;
  border-radius: 3px;
  height: 38px;
  width: 127px;
  border-radius: 3px;
  color: white;
  border: none;
  cursor: pointer;
}

h3 {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.4px;
  color: #4a4a4a;
}
h4 {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
}
h5 {
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  color: #2b3c4e;
}
hr {
  width: 724px;
  height: 1px;
  left: 340px;
  top: 432px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  margin-top: 16px;
  margin-bottom: 100px;
}
.minute,
.seconds {
  width: 100px;
  font-family: "Lato";
  display: grid;
  grid-template-areas: "minute";
  align-items: center;

  select {
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    font-family: inherit;
    font-weight: 300;
    font-size: 45px;
    cursor: inherit;
    line-height: inherit;
    outline: none;

    option {
      color: #000;
      font-size: 16px;
    }
  }
}

.minute::after,
.seconds::after {
  content: url("@/assets/entries-logo.svg");
  justify-self: end;
}

select,
.minute:after,
.seconds:after {
  grid-area: select;
}
p {
  font-size: 12px;
}
.select {
  position: relative;
  display: flex;
  align-items: center;
}
.min,
.sec {
  position: absolute;
  bottom: 0;
  left: 50px;
}
.sec {
  position: absolute;
  left: 75px;
}
</style>
