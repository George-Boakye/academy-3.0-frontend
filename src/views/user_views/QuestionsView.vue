<template>
  <the-layout>
    <template v-slot:side-nav>
      <SideNav />
    </template>
    <template v-slot:main-content>
      <div class="main">
        <div class="headsection">
          <div>
            <h1>Take Assessment</h1>
            <h2>
              Click the button below to start assessment, you have limited time
              for this test
            </h2>
          </div>
          <div>
            <h3>Timer</h3>
            <h4>
              <span class="timer">00</span><span class="time-range">min</span
              ><span class="timer">000<span class="time-range">max</span></span>
            </h4>
          </div>
        </div>
        <div class="main-body">
          <div class="questions">
            <h5>{{ questions[index]["questionNumber"] }}</h5>
            <h6>{{ questions[index]["question"] }}</h6>
            <div class="checkbox-container" @click="changeColor">
              <label
                :for="key"
                v-for="(answer, key) in questions[index]['answers']"
                :key="answer"
              >
                <br />
                <input
                  type="checkbox"
                  :id="key"
                  name=""
                  :value="key"
                  @change="answered($event)"
                />
                {{ answer }}
              </label>
            </div>
          </div>
          <div class="bottom">
            <button class="preview-button" @click="index--">Previous</button>
            <button class="next-button" @click="index++">Next</button>
          </div>
          <button class="finish-button">Finish</button>
        </div>
      </div>
    </template>
  </the-layout>
</template>
<script>
import SideNav from "@/components/UserSideNav.vue";
import TheLayout from "@/components/TheLayout.vue";

export default {
  components: {
    SideNav,
    TheLayout,
  },
  data() {
    return {
      selectedAnswer: "",
      index: 0,
      questions: [
        {
          questionNumber: "Question 1",
          question: "which of these is a frameworks?",
          answers: {
            a: "A. C++",
            b: " B. javascript",
            c: "C. vuejs",
            d: "D. html",
          },
          correctAnswer: "c",
        },
        {
          questionNumber: "Question 2",
          question: "which of these is a programming language ?",
          answers: {
            a: "A. css",
            b: "B. javascript",
            c: "C. vuejs",
            d: "D. html",
          },
          correctAnswer: "b",
        },
        {
          questionNumber: "Question 3",
          question: "which of these is used for styling?",
          answers: {
            a: "A. css",
            b: "B. javascript",
            c: "C. uejs",
            d: "D. html",
          },
          correctAnswer: "a",
        },
      ],
    };
  },
  methods: {
    answered(event) {
      this.selectedAnswer = event.target.value;
    },
    changeColor() {},
  },
};
</script>
<style scoped>
.bottom {
  display: flex;
  gap: 580px;
  margin-top: 86px;
}
.headsection {
  display: flex;
  gap: 280px;
}
h1 {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
  color: #2b3c4e;
}
h2 {
  font-family: "Lato";
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #2b3c4e;
}
h3 {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  margin-bottom: 10px;

  color: #4f4f4f;
}
.timer {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  color: #2b3c4e;
}
.time-range {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #4f4f4f;
}
h5 {
  font-family: "Lato";
  font-style: italic;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
}
.main-body {
  margin-top: 60px;
  text-align: center;
}
h6 {
  font-family: "Lato";
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2b3c4e;
  margin-top: 14px;
  margin-bottom: 38px;
}
label {
  font-family: "Lato";
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
}

.checkbox-container label {
  cursor: pointer;
  margin-bottom: 60px;
}
.checkbox-container {
}
.checkbox-container input[type="checkbox"] {
  cursor: pointer;
  appearance: none;
  height: 10px;
  width: 10px;
  background-color: rgb(207, 188, 188);
  border-style: 4px solid black;
  -webkit-appearance: none;
  margin-right: 40px;
  /* margin-bottom: 60px; */
}
input[type="checkbox"]:checked {
  background-color: black;
}
.next-button {
  height: 41px;
  width: 125px;
  left: 1110px;
  top: 662px;
  border-radius: 4px;
  background: #7557d3;
  color: white;
  border: none;
}
.preview-button {
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  height: 41px;
  width: 125px;
  color: black;
  background-color: white;
  border-radius: 4px;
}
.finish-button {
  height: 41px;
  width: 205px;
  background: #cecece;
  border-radius: 4px;
  border-radius: 4px;
  margin-top: 86px;
  border: none;
  color: white;
}
</style>
