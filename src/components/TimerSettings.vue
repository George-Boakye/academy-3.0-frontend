<template>
  <div class="main">
    <h3>Timer Setting</h3>
    <hr />
    <h4>Set Time</h4>
    <div class="time">
      <h5>00</h5>
      <p>min</p>
      <img src="@/assets/entries-logo.svg" alt="" srcset="" />
      <h5>000</h5>
      <p>sec</p>
      <img src="@/assets/entries-logo.svg" alt="" srcset="" />
    </div>
    <button>Save</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.setting-div {
  display: flex;
  gap: 100px;
}
.time {
  display: flex;
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
</style>
