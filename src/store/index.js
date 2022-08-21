import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    applicant: [],
  },
  getters: {
    getApplicant: (state) => state.applicant,
  },
  mutations: {
    GET_USER_DETAILS(state, payload) {
      state.applicant = payload;
    },
  },
  actions: {
    async userDetails({ commit }, userId) {
      try {
        let res = await axios.get(
          `http://localhost:3000/api/v1/auth/user/${userId}`
        );
        commit("GET_USER_DETAILS", res.data.data);
        console.log(res.data)
        return res;
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
