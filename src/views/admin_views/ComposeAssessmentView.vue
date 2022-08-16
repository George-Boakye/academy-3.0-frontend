<template>
  <the-layout>
    <template v-slot:side-nav>
      <SideNav />
    </template>
    <template v-slot:main-content>
      <div class="main">
        <div class="main-text">Compose Assessment</div>
        <form>
          <label class="box-labels">15/30</label>
          <input class="fileupload" type="file" id="file" />
          <label class="file-label" for="file"> + Choose file</label>

          <div class="box3">
            <label class="box-labels">Questions</label
            ><input class="text-area" type="" />
          </div>
          <div class="main-boxes">
            <div class="box1">
              <div>
                <label class="box-labels">Option A</label
                ><input class="box-input" />
              </div>
              <div>
                <label class="box-labels">Option B</label
                ><input class="box-input" />
              </div>
            </div>
            <div class="box2">
              <div>
                <label class="box-labels">Option C</label
                ><input class="box-answer" />
              </div>
              <div>
                <label class="box-labels">Option D</label
                ><input class="box-input" />
              </div>
            </div>
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
import SideNav from "@/components/UserSideNav.vue";
import TheLayout from "@/components/TheLayout.vue";

export default {
  components: {
    SideNav,
    TheLayout,
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
  margin-right: 22px;
  border: 1.55172px dashed #2b3c4e;
  border-radius: 6.2069px;
  text-align: center;
  padding: 46px 180px 40px 180px;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-bottom: 52px;
  color: #2b3c4e;
}
.fileupload {
  display: none;
}
.main-boxes {
  display: flex;
  margin-top: 48px;
}
.box2 {
  display: block;
}
.box3 {
}
.box-input {
  left: 25.49%;
  right: 42.85%;
  top: 40.23%;
  bottom: 55.76%;
  border: 1.5px solid #2b3c4e;
  border-radius: 4px;
  height: 41px;
  width: 456px;
  margin-bottom: 48px;
  border-radius: 4px;
}
.box-answer {
  background-color: #31d283;
  left: 25.49%;
  right: 42.85%;
  top: 40.23%;
  bottom: 55.76%;
  border: 1.5px solid #2b3c4e;
  border-radius: 4px;
  height: 41px;
  width: 456px;
  margin-bottom: 48px;
  border-radius: 4px;
  border: none;
}
.box-labels {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #2b3c4e;
}
.text-area {
  left: 25.49%;
  right: 6.74%;
  top: 49.9%;
  bottom: 36.04%;
  height: 144px;
  width: 976px;
  border-radius: 4px;

  border: 1.5px solid #2b3c4e;
  border-radius: 4px;
}
.main {
  margin-right: 32px;
}
.button1 {
  display: flex;
  gap: 560px;
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
  font-family: "Lato";
  cursor: pointer;
  border: none;
}
.button-finish {
  text-align: center;
  margin-top: 56px;
}
</style>
