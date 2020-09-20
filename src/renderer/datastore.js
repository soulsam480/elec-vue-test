const Datastore = require("nedb");
import path from "path";
import { remote } from "electron";

/**
 * @function db - Nedb init instance
 */
const db = new Datastore({
  autoload: true,
  filename: path.join(remote.app.getPath("userData"), "data.db"),
  onload: (err) => console.log(err),
});

export default db;
