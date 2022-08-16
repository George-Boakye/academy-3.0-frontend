<template>
  <the-layout>
    <template v-slot:side-nav>
      <SideNav />
    </template>
    <template v-slot:main-content>
      <div class="main">
        <div class="main-text">Create Application</div>
        <form>
          <div class="main-boxes">
            <div class="box1">
              <form class="label-form" action="/action_page.php">
                <input class="fileupload" type="file" id="file" />
                <label class="file-label" for="file"> + Choose file</label>
              </form>
              <label class="box-labels">Application closure date</label>
              <input class="box-input" type="date" />
            </div>
            <div class="box2">
              <div>
                <label class="box-labels">Link</label
                ><input class="box-input" />
              </div>
              <div>
                <label class="box-labels">Batch ID</label
                ><input class="box-input" />
              </div>
            </div>
          </div>
          <div class="box3">
            <label class="box-labels">Instructions</label
            ><input class="text-area" type="" />
          </div>
          <div class="button1"><button>Submit</button></div>
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
}
.box2 {
  display: block;
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
  margin-bottom: 103px;
  border-radius: 4px;
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
button {
  background: #7557d3;
  border-radius: 4px;
  height: 50px;
  width: 379px;
  left: 0px;
  top: 0px;
  border: none;
  color: white;
  text-align: center;
  cursor: pointer;
}
.button1 {
  text-align: center;
  margin-top: 44px;
}
</style>
