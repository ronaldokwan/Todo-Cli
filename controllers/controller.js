const View = require("../views/view");
const Model = require("../models/model");
class Controller {
  static error(err) {
    View.error(err);
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
    if (newTask === -1) {
      View.error("Nothing to add");
    } else {
      View.add(newTask);
    }
  }
  static find(task) {
    let findTask = Model.find(task);
    if (findTask === -1) {
      View.error("can't find the ID");
    } else {
      View.find(findTask);
    }
  }
  static delete(task) {
    let deleteTask = Model.delete(task);
    if (deleteTask === -1) {
      View.error("There is nothing to delete");
    } else {
      View.delete(deleteTask);
    }
  }
  static complete(task) {
    let completeTask = Model.complete(task);
    if (completeTask === -1) {
      View.error("There is no task to be completed");
    } else {
      View.complete(completeTask);
    }
  }
  static uncomplete(task) {
    let uncompleteTask = Model.uncomplete(task);
    if (uncompleteTask === -1) {
      View.error("There is no task to be uncompleted");
    } else {
      View.uncomplete(uncompleteTask);
    }
  }
}
module.exports = Controller;
