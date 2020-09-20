import path from "path";
import { remote } from "electron";

// todo nedb instance

const Datastore = require("nedb-promises");
let db = Datastore.create(path.join(remote.app.getPath("userData"), "data.db"));
console.log(db);
// todo store
const state = {
  neStore: {},
};

const mutations = {
  addAll: (state) => {
    console.log("fired");
    db.find({})
      .then((res) => {
        console.log(res);
        state.neStore = res;
      })
      .catch((e) => console.log(e));
  },
};

const actions = {
  addData: (PAYLOAD) => {
    console.log(PAYLOAD);
    db.insert(PAYLOAD)
      .then(() => {
        console.log("added");
      })
      .catch((err) => console.log(err));
  },
};

export default {
  state,
  mutations,
  actions,
};
