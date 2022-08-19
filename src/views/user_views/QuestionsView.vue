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
              Click the finish button below to submit assessment, you can go
              back at any time to edit your <br />
              answers.
            </h2>
          </div>
          <div>
            <h3>Timer</h3>
            <h4>
              <span class="timer">00</span><span class="time-range">min</span
              ><span class="timer">000<span class="time-range">sec</span></span>
            </h4>
          </div>
        </div>
        <div class="main-body">
          <div class="questions-wrapper">
            <div class="questions">
              <h5>{{ questions[index]["questionNumber"] }}</h5>
              <h6>{{ questions[index]["question"] }}</h6>
              <div class="checkbox-container">
                <label
                  :for="key"
                  v-for="(answer, key) in questions[index]['answers']"
                  :key="answer"
                >
                  <input
                    type="radio"
                    :id="key"
                    name="answers"
                    :value="key"
                    @change="answered($event)"
                  />
                  <span :class="{'checked-answer': true}">{{ answer }}</span>
                </label>
              </div>
            </div>
          </div>
          <div class="bottom">
            <button
              class="preview-button"
              :disabled="index === 0"
              @click="index--"
            >
              Previous
            </button>
            <button class="next-button" @click="index++">Next</button>
          </div>
          <button class="finish-button" @click="finishQuiz">Finish</button>
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
          question: "What is the purpose of HDR technology?",
          answers: {
            a: "A. To reduce the file size of images and videos.",
            b: "B. To speed up 3D rendering performance.",
            c: "C. To support higher video resolutions.",
            d: "D. To display more colors in images and videos",
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
    finishQuiz() {
      this.$router.push({ name: "successful" });
    },
  },
  computed: {
    questionslength() {
      return this.questions.length;
    },
  },
};
</script>
<style scoped>
.bottom {
  display: flex;
  justify-content: space-around;
  margin-top: 86px;
}
.headsection {
  display: flex;
  justify-content: space-between;
  padding-right: 82px;
}
h1 {
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
  color: #2b3c4e;
}
h2 {
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
}
h3 {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 10px;
  color: #4f4f4f;
}
.timer {
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  color: #2b3c4e;
}
.time-range {
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
  text-align: center;
}
.main-body {
  margin-top: 60px;
  text-align: center;
}
.questions-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
.questions {
  width: max-content;
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
  text-align: left;
}

.checkbox-container label {
  cursor: pointer;
  margin-bottom: 37px;
}
.checkbox-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.checkbox-container input[type="radio"] {
  cursor: pointer;
  appearance: none;
  height: 10px;
  width: 10px;
  background-color: #fff;
  border: 1px solid #2b3c4e;
  -webkit-appearance: none;
  margin-right: 42px;
}
input[type="radio"]:checked {
  background-color: black;
}
input[type = radio]:checked ~ span {
background: #31D283;
}
button {
  font-family: "Lato";
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
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
  cursor: pointer;
}
.preview-button {
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  height: 41px;
  width: 125px;
  color: black;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
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
  cursor: pointer;
}
</style>
