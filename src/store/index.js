import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    applicant: [],
    questions: [],
    applicants: [],
    batches: [],
  },
  getters: {
    getApplicant: (state) => state.applicant,
    getQuestions: (state) => state.questions,
    getApplicants: (state) => state.applicants,
    getBatches: (state) => state.batches,
  },
  mutations: {
    GET_USER_DETAILS(state, payload) {
      state.applicant = payload;
    },
    ALL_QUESTIONS(state, payload) {
      state.questions = payload;
    },
    ALL_APPLICANTS(state, payload) {
      state.applicants = payload;
    },
    GET_ALL_BATCHES(state, payload) {
      state.batches = payload;
    },
  },
  actions: {
    async userDetails({ commit }, userId) {
      try {
        let res = await axios.get(
          `http://localhost:3000/api/v1/auth/user/${userId}`
        );
        commit("GET_USER_DETAILS", res.data.data);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async questions({ commit }) {
      const token = localStorage.getItem("token");
      try {
        let res = await axios.get(
          "http://localhost:3000/api/v1/auth/questions",
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        commit("ALL_QUESTIONS", res.data.data);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async applicants({ commit }) {
      const token = localStorage.getItem("admin-token");
      try {
        let res = await axios.get(
          "http://localhost:3000/api/v1/auth/applicants",
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        commit("ALL_APPLICANTS", res.data.data);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async allBatches({ commit }) {
      const token = localStorage.getItem("admin-token");
      try {
        let res = await axios.get(
          "http://localhost:3000/api/v1/auth/all/batches",
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        commit("GET_ALL_BATCHES", res.data.data);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
