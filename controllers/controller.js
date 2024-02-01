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
  static find(task) {
    let findTask = Model.find(task);
    View.find(findTask);
  }
  static delete(task) {
    let deleteTask = Model.delete(task);
    if (deleteTask === -1) {
      View.error();
    } else {
      View.delete(deleteTask);
    }
  }
}
module.exports = Controller;
