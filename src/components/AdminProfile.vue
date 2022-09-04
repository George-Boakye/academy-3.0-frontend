<template>
  <div class="main">
    <div class="profile">
      <h1>Profiles Setting</h1>
      <button @click="edit">Edit</button>
    </div>
    <form @submit.prevent="save()">
      <div class="image">
        <img :src="admin.img" alt="" srcset="" />
        <div class="label-form">
          <input
            class="fileupload"
            type="file"
            id="file"
            name="filename"
            @change="selectFile($event)"
          />
          <label class="file-label" for="file"> Upload new image</label>
        </div>
        <h2 class="remove" @click="remove">x Remove</h2>
      </div>
      <div class="inputs-wrapper">
        <div class="flex1">
          <div>
            <label>Name</label>
            <input
              class="input1"
              :placeholder="admin.fullName"
              :readonly="isDisabled"
              v-model="user.fullName"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              class="input1"
              :placeholder="admin.email"
              :readonly="isDisabled"
              v-model="user.email"
            />
          </div>

          <div>
            <label>Phone number</label>
            <input
              type="tel"
              class="input1"
              :placeholder="admin.phoneNumber"
              :readonly="isDisabled"
              v-model="user.phoneNumber"
            />
          </div>
        </div>
        <div class="flex1">
          <div>
            <label>Country</label>
            <input
              class="input1"
              :placeholder="admin.country"
              :readonly="isDisabled"
              v-model="user.country"
            />
          </div>
          <div>
            <label>Address</label>
            <input
              class="input2"
              :placeholder="admin.address"
              :readonly="isDisabled"
              v-model="user.address"
            />
          </div>
        </div>
      </div>
      <div class="button3">
        <button class="button2" type="submit">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      user: {
        fullName: null,
        email: null,
        phoneNumber: null,
        country: null,
        address: null,
        img: null,
      },
      isDisabled: true,
    };
  },
  async created() {
    const adminId = localStorage.getItem("adminId");
    await this.adminInfo(adminId);
    this.user.fullName = this.admin.fullName;
    this.user.email = this.admin.email;
    this.user.phoneNumber = this.admin.phoneNumber;
    this.user.country = this.admin.country;
    this.user.address = this.admin.address;
  },
  async updated() {
    const adminId = localStorage.getItem("adminId");
    await this.adminInfo(adminId);
  },
  computed: {
    ...mapGetters({
      admin: "getAdmin",
    }),
  },
  methods: {
    edit() {
      this.isDisabled = false;
    },
    remove() {
      const user = {
        img: "",
      };
      const adminId = localStorage.getItem("adminId");
      const token = localStorage.getItem("admin-token");
      axios
        .put(`http://localhost:3000/api/v1/auth/admin/img/${adminId}`, user, {
          headers: {
            Authorization: `Basic ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    save() {
      const adminId = localStorage.getItem("adminId");
      const token = localStorage.getItem("admin-token");
      const formData = new FormData();
      formData.append("fullName", this.user.fullName);
      formData.append("email", this.user.email);
      formData.append("phoneNumber", this.user.phoneNumber);
      formData.append("country", this.user.country);
      formData.append("address", this.user.address);
      formData.append("img", this.user.img);
      axios
        .put(`http://localhost:3000/api/v1/auth/admin/${adminId}`, formData, {
          headers: {
            Authorization: `Basic ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    selectFile(event) {
      this.user.img = event.target.files[0];
    },
    ...mapActions(["adminInfo"]),
  },
};
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
  height: 38px;
  width: 127px;
  border: none;
  color: white;
  background: #7557d3;
  border-radius: 3px;
  align-items: center;
  font-family: "Lato";
  font-size: 16px;
}

.input2 {
  width: 469px;
  height: 54px;
  left: 595px;
  top: 733px;
  color: black;
  background: rgba(117, 87, 211, 0.04);
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
  background: rgba(117, 87, 211, 0.04);
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
  cursor: pointer;
}

button:focus {
  color: #7557d3;
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

img {
  width: 54px;
  height: 54px;
  border-radius: 50%;
}

.remove {
  cursor: pointer;
}
</style>
