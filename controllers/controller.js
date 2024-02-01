const View = require("../views/view");
const Model = require("../models/model");
class Controller {
  static error() {
    View.error();
  }
  static help() {
    View.help();
  }
  static list() {
    let list = Model.list();
    View.list(list);
  }
  static add(task) {
    let newTask = Model.add(task);
    View.add(newTask);
  }
}
module.exports = Controller;
