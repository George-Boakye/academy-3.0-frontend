<template>
  <div class="main">
    <div class="profile">
      <h1>Profiles Setting</h1>
      <button>Edit</button>
    </div>
    <div class="image">
      <img src="@/assets/admin-image.svg" alt="" srcset="" />
      <form class="label-form" action="/action_page.php">
        <input class="fileupload" type="file" id="file" name="filename" />
        <label class="file-label" for="file"> Upload new image</label>
      </form>
      <h2>x Remove</h2>
    </div>
    <form>
      <div class="inputs-wrapper">
        <div class="flex1">
          <div>
            <label>Name</label>
            <input class="input1" placeholder="Cameron Williamson" />
          </div>
          <div>
            <label>Email</label>
            <input class="input1" placeholder="debra.holt@example.com" />
          </div>

          <div>
            <label>Phone number</label>
            <input type="number" class="input1" placeholder="(303) 555-0105" />
          </div>
        </div>
        <div class="flex1">
          <div>
            <label>Country</label>
            <input class="input1" placeholder="Afghanistan" />
          </div>
          <div>
            <label>Address</label>
            <input
              class="input2"
              placeholder="3891 Ranchview Dr. Richardson, California 62639"
            />
          </div>
        </div>
      </div>
      <div class="button3">
        <button class="button2" type="submit">Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile {
  display: flex;
  justify-content: space-between;
}
.flex1 {
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
}
.button2 {
  top: 80.76%;
  bottom: 15.53%;
  height: 38px;
  width: 127px;
  border-radius: 3px;
  border: none;
  color: white;
  background: #7557d3;
  border-radius: 3px;
  align-items: center;
}
.input2 {
  width: 469px;
  height: 54px;
  left: 595px;
  top: 733px;
  color: black;
  background: #cdcbd6;
}
.button3 {
  text-align: center;
}
.input1 {
  width: 216px;
  height: 54px;
  left: 340px;
  top: 613px;
  color: black;
  background: #cdcbd6;
}
::placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
  /* identical to box height, or 153% */
  letter-spacing: -0.117188px;
  color: #333758;
}
button {
  border: 1px solid #7557d3;
  border-radius: 3px;
  height: 38px;
  width: 127px;
  left: 937px;
  top: 382px;
  border-radius: 3px;
  color: #7557d3;
  background: white;
}
label {
  display: block;
  text-align: start;
}
input {
  width: 379px;
  height: 48px;
  left: 767px;
  top: 394px;
  margin-top: 3px;
  border: 1.5px solid #bdbdbd;
  border-radius: 4px;
  padding-left: 10px;
}
label {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  margin-top: 20px;
  color: #4f4f4f;
  margin-bottom: 8px;
}
.main {
  margin-right: 260px;
}
.image {
  display: flex;
  gap: 32px;
  margin-top: 73px;
  margin-bottom: 40px;
}
.file-label {
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.117188px;
  text-decoration-line: underline;
  color: #333758;
  padding: 5px;
  opacity: 0.5;
}
.fileupload {
  display: none;
}
.label-form {
  display: flex;
  justify-content: center;
}
h2 {
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  letter-spacing: -0.117188px;
  margin-top: 28px;
  color: #ff5722;
}
</style>
