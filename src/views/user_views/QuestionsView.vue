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
            <div>
              <p>Question {{ index + 1 }}</p>
              <h5>
                {{ allQuestions[index].question }}
              </h5>
              <div class="checkbox-container">
                <label
                  v-for="(answer, alphabet) in allQuestions[index].options"
                  :key="answer"
                >
                  <input
                    :checked="selectedAnswer === alphabet"
                    :value="alphabet"
                    type="radio"
                    :id="key"
                    name="answers"
                    @change="answered($event)"
                  />
                  <span
                    :class="{
                      correct: selectedAnswer === alphabet ? true : false,
                    }"
                    >{{ alphabet.toUpperCase() }}. {{ answer }}</span
                  >
                </label>
              </div>
            </div>
          </div>
          <div class="bottom">
            <button
              class="preview-button"
              :disabled="index === 0"
              @click="previous()"
            >
              Previous
            </button>
            <button class="next-button" @click="next()">Next</button>
          </div>
          <button class="finish-button" @click="finish()">Finish</button>
        </div>
      </div>
    </template>
  </the-layout>
</template>
<script>
import SideNav from "@/components/UserSideNav.vue";
import TheLayout from "@/components/TheLayout.vue";
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  components: {
    SideNav,
    TheLayout,
  },

  data() {
    return {
      selectedAnswer: "",
      index: 0,
      answers: [],
      user: {
        score: 0,
      },
    };
  },

  async created() {
    await this.objQuestion();
    console.log(this.allQuestions);
  },

  computed: {
    ...mapGetters({
      allQuestions: "getQuestions",
    }),
  },
  methods: {
    answered(event) {
      this.selectedAnswer = event.target.value;
    },
    finish() {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      axios
        .put(`http://localhost:3000/api/v1/auth/user/${userId}`, this.user, {
          headers: {
            Authorization: `Basic ${token}`,
          },
        })
        .then((res) => {
          console.log(res)
          this.$router.push({ name: "successful" })
        })
        .catch((error) => {
          throw error;
        });
    },
    ...mapActions({
      objQuestion: "questions",
    }),
    next() {
      this.answers[this.index] = this.selectedAnswer;
      if (this.index < this.allQuestions.length - 1) {
        this.index++;
      }
      if (this.index < this.answers.length) {
        this.selectedAnswer = this.answers[this.index];
      } else {
        this.selectedAnswer = "";
      }
      this.computeScore();
    },
    previous() {
      this.answers[this.index] = this.selectedAnswer;
      this.index === 0 ? (this.index = 0) : this.index--;
      this.selectedAnswer = this.answers[this.index];
      this.computeScore();
    },
    computeScore() {
      let score = 0;
      this.answers.forEach((item, index) => {
        if (item === this.allQuestions[index].correctAnswer) {
          score += 1;
        }
      });
      this.user.score = score;
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
  display: flex;
  flex-direction: column;
  font-style: italic;
  font-weight: 500;
  font-size: 25px;
  line-height: 17px;
  color: #2b3c4e;
  text-align: center;
  margin-bottom: 48px;
  margin-top: 14px;
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
/* input[type="radio"]:checked ~ span {
  background: #31d283;
} */
.correct {
  background: #31d283;
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
