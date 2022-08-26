<template>
  <the-layout>
    <template v-slot:side-nav>
      <SideNav />
    </template>
    <template v-slot:main-content>
      <div class="main">
        <h1 class="main-text">Compose Assessment</h1>
        <form @submit.prevent="">
          <label class="box-labels">{{ index + 1 }}/30</label>

          <input class="fileupload" type="file" id="file" />
          <p>{{ fileError }}</p>
          <label class="file-label" for="file"> + Choose file</label>

          <div class="box3">
            <label class="box-labels">Questions</label> <br />
            <textarea
              name=""
              class="text-area"
              id=""
              v-model="user.question"
            ></textarea>
            <p>{{ questionError }}</p>
          </div>

          <div class="main-boxes">
            <div>
              <label class="box-labels" @click="correctAns('a')"
                >Option A</label
              >
              <br /><input
                class="box-input"
                :class="{
                  correctAns: user.correctAnswer === 'a' ? true : false,
                }"
                v-model="user.options.a"
              />
            </div>
            <div>
              <label class="box-labels" @click="correctAns('b')"
                >Option B</label
              >
              <br /><input
                class="box-input"
                :class="{
                  correctAns: user.correctAnswer === 'b' ? true : false,
                }"
                v-model="user.options.b"
              />
            </div>

            <div>
              <label class="box-labels" @click="correctAns('c')"
                >Option C</label
              >
              <br /><input
                class="box-input"
                :class="{
                  correctAns: user.correctAnswer === 'c' ? true : false,
                }"
                v-model="user.options.c"
              />
            </div>
            <div>
              <label class="box-labels" @click="correctAns('d')">Option D</label
              ><br /><input
                class="box-input"
                :class="{
                  correctAns: user.correctAnswer === 'd' ? true : false,
                }"
                v-model="user.options.d"
              />
            </div>
            <p>{{ derror }}</p>
          </div>
          <div class="button1">
            <button
              class="button11"
              :disabled="index === 0"
              @click="previous()"
            >
              Previous
            </button>
            <button class="button11" @click="next()">Next</button>
          </div>
          <div class="button-finish">
            <button class="button2" @click="finish()">Finish</button>
          </div>
        </form>
      </div>
    </template>
  </the-layout>
</template>
<script>
import SideNav from "@/components/AdminSideNav.vue";
import TheLayout from "@/components/TheLayout.vue";
import axios from "axios";

export default {
  components: {
    SideNav,
    TheLayout,
  },
  data() {
    const questionTemplate = {
      options: {
        a: null,
        b: null,
        c: null,
        d: null,
      },
      question: "",
      selectedAnswer: null,
      correctAnswer: null,
      file: null,
    };

    return {
      index: 0,
      questions: [],
      questionTemplate,
      user: { ...questionTemplate },
      optionAerror: null,
      optionBerror: null,
      optionCerror: null,
      optionDerror: null,
      questionError: "",
    };
  },
  methods: {
    next() {
      if (this.user.question !== "") {
        this.questions[this.index] = this.user;
        this.index++;

        if (this.index < this.questions.length) {
          this.user = { ...this.questions[this.index] };
        } else {
          this.user = { ...this.questionTemplate };
        }
      }
      console.log(this.questions);
    },
    previous() {
      if (this.user.question !== "") {
        this.questions[this.index] = this.user;
      }

      this.index === 0 ? (this.index = 0) : this.index--;
      this.user = { ...this.questions[this.index] };
    },
    finish() {
      const token = localStorage.getItem("admin-token");
      axios
        .post(
          "http://localhost:3000/api/v1/auth/create-assessment",
          this.questions,
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
          console.log(error);
        });
      this.user = this.questionTemplate;
      this.index = 0;
    },
    correctAns(value) {
      this.user.correctAnswer = value;
      this.holder = value;
    },

    // composeApplication() {
    //   this.user.optionA == null ||
    //   this.user.optionB == null ||
    //   this.user.optionC == null||
    //   this.user.optionD == null
    //     ? (this.optionDerror = "Select at least one answer option!")
    //     : console.log(this.optionDerror);
    //   this.user.question.length < 2
    //     ? (this.questionError = "input a valid question!")
    //     : console.log(this.instructionError);
    // },
  },
};
</script>
<style scoped>
/* .main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} */
p {
  color: red;
  font-size: 10px;
  text-align: start;
  margin-top: 5px;
}
input {
  padding: 10px;
}
.correctAns {
  background: #31d283;
}
label {
  cursor: pointer;
  padding: 4px;
}
label:hover {
  background: #31d283;
}
.main-text {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  margin-bottom: 92px;
  align-self: flex-start;
}

.file-label {
  width: 456px;
  height: 108px;
  margin-right: 22px;
  border: 1.55172px dashed #2b3c4e;
  border-radius: 6.2069px;
  text-align: center;
  padding: 46px 180px 40px 180px;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-top: 21px;
  margin-bottom: 52px;
  color: #2b3c4e;
}

.fileupload {
  display: none;
}

.main-boxes {
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 25px 64px;
  margin-top: 48px;
}

.box-input {
  border: 1.5px solid #2b3c4e;
  height: 41px;
  width: 456px;
  border-radius: 4px;
  margin-top: 5px;
}

/* .box-answer {
  background-color: #31d283;
} */
.box-labels {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
}

.text-area {
  height: 144px;
  width: 976px;
  border: 1.5px solid #2b3c4e;
  border-radius: 4px;
  resize: none;
  margin-top: 5px;
  padding: 10px;
}

.main {
  margin-right: 32px;
}

button {
  font-family: "Lato";
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
}

.button1 {
  margin-top: 52px;
  display: flex;
  justify-content: space-around;
  color: white;
}

.button11 {
  border: none;
  color: white;
  background: #2b3c4e;
  height: 41px;
  width: 125px;
  border-radius: 4px;
  cursor: pointer;
}

.button2 {
  background: #cecece;
  height: 41px;
  width: 205px;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  border: none;
}

.button-finish {
  text-align: center;
  margin-top: 56px;
}
</style>
