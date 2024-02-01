const fs = require("fs");
const Task = require("./class");

class Model {
  static list() {
    let list = fs.readFileSync("./data/data.json", "utf8");
    list = JSON.parse(list);

    let result = [];
    for (let i = 0; i < list.length; i++) {
      let index = list[i];
      result.push(new Task(index.id, index.task));
    }
    return result;
  }
  static add(task) {
    let list = Model.list();
    let id = 1;
    if (list.length > 0) {
      id = list[list.length - 1].id + 1;
    }
    let newTask = new Task(id, task);
    list.push(newTask);

    let string = JSON.stringify(list, null, 2);
    fs.writeFileSync("./data/data.json", string);
    return newTask;
  }
}
module.exports = Model;
