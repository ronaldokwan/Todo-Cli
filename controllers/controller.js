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
    View.show(list);
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
    if (!findTask) {
      View.error("can't find the ID");
    } else {
      View.show(findTask);
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
    Model.complete(task) === -1
      ? View.error("There is no task to be completed")
      : View.show(Model.complete(task));
    // let completeTask = Model.complete(task);
    // if (completeTask === -1) {
    //   View.error("There is no task to be completed");
    // } else {
    //   View.show(completeTask);
    // }
  }
  static uncomplete(task) {
    Model.uncomplete(task) === -1
      ? View.error("There is no task to be uncompleted")
      : View.show(Model.uncomplete(task));

    // let uncompleteTask = Model.uncomplete(task);
    // if (uncompleteTask === -1) {
    //   View.error("There is no task to be uncompleted");
    // } else {
    //   View.show(uncompleteTask);
    // }
  }
}
module.exports = Controller;
