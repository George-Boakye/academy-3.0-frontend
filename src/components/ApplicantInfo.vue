<template>
  <div class="main">
    <img src="@/assets/accept-image.svg" alt="profile-image" srcset="" />
    <h1>Personal Details</h1>
    <form>
      <div class="input1">
        <div>
          <label>Name</label>
          <input />
        </div>
        <div>
          <label>Email</label>
          <input />
        </div>
      </div>
      <div class="input2">
        <div>
          <label>Address</label>
          <input />
        </div>
        <div>
          <label>University</label>
          <input />
        </div>
      </div>
      <div class="input3">
        <div>
          <label>Course of study</label>
          <input />
        </div>
        <div>
          <label>Date of birth</label>
          <input />
        </div>
      </div>
      <div class="input4">
        <div>
          <label>CGPA</label>
          <input />
        </div>
        <div>
          <label>CV</label>
          <input />
        </div>
      </div>
      <div class="buttons">
        <button class="Approve">Approve</button>
        <button class="Decline">Decline</button>
      </div>
    </form>
  </div>
</template>
<script></script>
<style scoped>
h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;

  color: #7d7d7d;
}
label {
  display: block;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: start;
  color: #b1b1b1;
}
.input1,
.input2,
.input3,
.input4 {
  width: 231px;
  height: 48px;
  left: 888px;
  top: 408px;

  border: 1px solid #cdcfd6;
  border-radius: 4px;
}

.buttons {
  display: flex;
  justify-content: space-around;
}

.Decline {
  width: 125px;
  height: 48px;
  left: 1152px;
  top: 831px;

  border: 1px solid #cecece;
  border-radius: 4px;
  border: none;
}
.Approve {
  width: 125px;
  height: 48px;
  left: 1003px;
  top: 831px;
  color: white;
  border: none;
  background: #7557d3;
  border-radius: 4px;
}
</style>
