const Task = require("./class");
class Factory {
  static generateTask(id, task, complete) {
    return new Task(id, task, complete);
  }
}

module.exports = Factory;
