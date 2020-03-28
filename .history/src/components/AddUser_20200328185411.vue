<template>
  <div>
    <h3>Add User</h3>
    <div class="add">
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="item" placeholder="Add User...." />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddUser",
  data() {
    return {
      item: ""
    };
  },
  methods: {
    ...mapActions(["addUser"]),

    onSubmit() {
      this.addUser(this.item);
      this.item = "";
    }
  }
};
</script>
<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  border: 1px solid #41b883;
  cursor: pointer;
}
</style>