<template>
  <div class="home">
    <div v-for="user in allUsers" :key="user.id">{{ user.name }}</div>
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
