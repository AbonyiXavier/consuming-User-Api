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
    setUsers: (state, users) => (state.users = users),
    newUser: (state, user) => state.users.unshift(user),
    removeUser: (state, id) =>
      (state.users = state.users.filter(user => user.id !== id))
  },
  actions: {
    async fetchUsers({ commit }) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      // console.log("my response", response.data);
      commit("setUsers", response.data);
    },
    async addUser({ commit }, name, email) {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name,
          email
        }
      );
      console.log("my response", response.data);
      commit("newUser", response.data);
    },
    async deleteUser({ commit }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      commit("removeUser", id);
    }
  },
  modules: {}
});
