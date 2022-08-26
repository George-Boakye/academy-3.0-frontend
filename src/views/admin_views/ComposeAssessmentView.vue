<template>
  <the-layout>
    <template v-slot:side-nav>
      <SideNav />
    </template>
    <template v-slot:main-content>
      <div class="main">
        <h1 class="main-text">Compose Assessment</h1>
        <form @submit.prevent="composeApplication">
          <label class="box-labels">15/30</label>

          <input class="fileupload" type="file" id="file" />
          <p>{{ fileError }}</p>
          <label class="file-label" for="file"> + Choose file</label>

          <div class="box3">
            <label class="box-labels">Questions</label> <br />
            <textarea name="" class="text-area" id=""></textarea>
            <p>{{ questionError }}</p>
          </div>

          <div class="main-boxes">
            <div>
              <label class="box-labels">Option A</label> <br /><input
                class="box-input"
              />
            </div>
            <div>
              <label class="box-labels">Option B</label> <br /><input
                class="box-input box-answer"
              />
            </div>

            <div>
              <label class="box-labels">Option C</label> <br /><input
                class="box-input"
              />
            </div>
            <div>
              <label class="box-labels">Option D</label><br /><input
                class="box-input"
              />
            </div>
            <p>{{ optionDerror }}</p>
          </div>
          <div class="button1">
            <button class="button11">Previous</button>
            <button class="button11">Next</button>
          </div>
          <div class="button-finish">
            <button class="button2">Finish</button>
          </div>
        </form>
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
  data() {
    return {
      user: {
        optionA: null,
        optionB: null,
        optionC: null,
        optionD: null,
        question: "",
        file: null,
      },

      optionAerror: null,
      optionBerror: null,
      optionCerror: null,
      optionDerror: null,
      questionError: "",
      fileError: null,
    };
  },
  methods: {
    composeApplication() {
      this.user.optionA ||
      this.user.optionB ||
      this.user.optionC ||
      this.user.optionD == null
        ? (this.optionDerror = "Select at least one answer option!")
        : console.log(this.optionDerror);

      this.user.file == null
        ? (this.fileError = "upload file")
        : console.log(this.fileError);
      this.user.question.length < 5
        ? (this.questionError = "input a valid question!")
        : console.log(this.instructionError);
    },
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
.box-answer {
  background-color: #31d283;
}
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
