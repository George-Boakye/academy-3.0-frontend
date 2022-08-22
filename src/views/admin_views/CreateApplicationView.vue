<template>
  <the-layout>
    <template v-slot:side-nav>
      <SideNav />
    </template>
    <template v-slot:main-content>
      <div class="main">
        <div class="main-text">Create Application</div>
        <form @submit.prevent="createApplication">
          <div class="main-boxes">
            <div>
              <label class="file-label" for="file"> + Choose file</label>
              <input class="fileupload" type="file" id="file" />
              <p>{{ fileError }}</p>
            </div>
            <div>
              <label class="box-labels">Link</label><br /><input
                class="box-input"
              />
              <p>{{ linkError }}</p>
            </div>
            <div>
              <label class="box-labels">Application closure date</label><br />
              <input
                class="box-input"
                type="text"
                placeholder="dd/mm/yyyy"
                onfocus="(this.type='date')"
                onblur="if(this.value==''){this.type='text'}"
              />
              <p>{{ dateError }}</p>
            </div>
            <div>
              <label class="box-labels">Batch ID</label> <br /><input
                class="box-input"
              />
              <p>{{ batchIderror }}</p>
            </div>
          </div>
          <div class="box3">
            <label class="box-labels">Instructions</label> <br />
            <textarea class="text-area" name="" id=""></textarea>
            <p>{{ instructionsError }}</p>
          </div>
          <div class="button1"><button>Submit</button></div>
        </form>
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
    return {
      user: {
        link: null,
        date: null,
        batchId: "",
        instructions: "",
        file: null,
      },

      linkError: null,
      dateError: null,
      batchIderror: "",
      instructionsError: "",
      fileError: null,
    };
  },
  methods: {
    createApplication() {
      this.user.link == null
        ? (this.linkError = "upload link!")
        : console.log(this.linkError);
      this.user.date == null
        ? (this.dateError = "choose a date!")
        : console.log(this.emailError);
      this.user.batchId.length < 1
        ? (this.batchIderror = "include batch ID!")
        : console.log(this.batchError);
      this.user.file == null
        ? (this.fileError = "upload file")
        : console.log(this.fileError);
      this.user.instructions.length < 5
        ? (this.instructionsError = "input a clear instruction!")
        : console.log(this.instructionError);
        
    },
  },
};
</script>
<style scoped>
.main-text {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  margin-bottom: 92px;
}
.file-label {
  width: 456px;
  height: 108px;
  border: 1.55172px dashed #2b3c4e;
  border-radius: 6.2069px;
  text-align: center;
  padding: 46px 180px 40px 180px;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #2b3c4e;
}
p {
  color: red;
  font-size: 10px;
  text-align: start;
  margin-top: 5px;
}
.fileupload {
  display: none;
}
.main-boxes {
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  gap: 52px 64px;
  margin-bottom: 36px;
}

.box-input {
  border: 1.5px solid #2b3c4e;
  border-radius: 4px;
  height: 41px;
  width: 456px;
  border-radius: 4px;
  margin-top: 5px;
  padding-left: 10px;
}
.box-labels {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
}
.text-area {
  margin-top: 5px;
  height: 144px;
  width: 976px;
  border-radius: 4px;
  border: 1.5px solid #2b3c4e;
  border-radius: 4px;
  resize: none;
}
.main {
  margin-right: 32px;
}
button {
  font-family: "Lato";
  background: #7557d3;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  border-radius: 4px;
  height: 50px;
  width: 379px;
  border: none;
  color: white;
  text-align: center;
  cursor: pointer;
}
.button1 {
  text-align: center;
  margin-top: 44px;
}
input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}
</style>
