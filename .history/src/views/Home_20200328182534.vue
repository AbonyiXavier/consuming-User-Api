<template>
  <div class="todos">
    <div v-for="user in allUsers" :key="user.id" class="todo">{{ user.name }}</div>
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
