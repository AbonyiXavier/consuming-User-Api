<template>
  <div class="container">
    <div class="users">
      <AddUser />
      <div v-for="user in allUsers" :key="user.id" class="user">{{ user.name }}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  methods: {
    ...mapActions(["fetchUsers"])
  },
  computed: mapGetters(["allUsers"]),
  created() {
    this.fetchUsers();
  },
  components: {}
};
</script>

<style scoped>
.container {
  max-width: 90%;
  margin: 0px auto;
  padding: 0px;
}
.users {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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