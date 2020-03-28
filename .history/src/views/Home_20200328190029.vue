<template>
  <div class="container">
    <div class="mb-3">
      <AddUser />
    </div>
    <div class="users">
      <div v-for="user in allUsers" :key="user.id" class="user">
        {{ user.name }}
        <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
import AddUser from "../components/AddUser";
export default {
  name: "Home",
  methods: {
    ...mapActions(["fetchUsers"])
  },
  computed: mapGetters(["allUsers"]),
  created() {
    this.fetchUsers();
  },
  components: {
    AddUser
  }
};
</script>

<style scoped>
.users {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

.user {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
</style>