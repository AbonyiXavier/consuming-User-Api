import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: []
  },

  getters: {
    allUsers: state => state.users
  },
  mutations: {
    setUsers: (state, users) => (state.users = users)
  },
  actions: {
    async fetchUsers({ commit }) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      // console.log("my response", response.data);
      commit("setUsers", response.data);
    }
  },
  modules: {}
});
