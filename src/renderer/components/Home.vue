<template>
  <div>
    <input type="text" v-model="name" placeholder="name" />
    <input type="email" v-model="email" placeholder="email" />
    <input type="number" v-model.number="number" placeholder="number" />
    <br />
    <br />
    <button @click="submit">Submit</button>

    <button @click="showAllData">Alll Data</button>
  </div>
</template>

<script>
/* import db from "../datastore";
 */
import store from "../store/index";
export default {
  name: "Home",
  data() {
    return {
      name: "",
      email: "",
      number: null,
    };
  },
  methods: {
    submit() {
      let newDoc = {
        name: this.name,
        email: this.email,
        number: this.number,
      };
      store.dispatch("addData", newDoc);
    },
    showAllData() {
      db.count({}, (count, err) => {
        console.log("invoked");
        console.log(count);
      });
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped></style>
