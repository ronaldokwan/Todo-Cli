const fs = require("fs");
const Task = require("./class");

class Model {
  static list() {
    let list = fs.readFileSync("./data/data.json", "utf8");
    list = JSON.parse(list);

    let result = [];
    for (let i = 0; i < list.length; i++) {
      let index = list[i];
      result.push(new Task(index.id, index.task, index.complete));
    }
    return result;
  }
  static add(task) {
    if (task === undefined) {
      return -1;
    }
    let list = Model.list();
    let id = 1;
    if (list.length > 0) {
      id = list[list.length - 1].id + 1;
    }
    let newTask = new Task(id, task, "[ ]");
    list.push(newTask);

    let string = JSON.stringify(list, null, 2);
    fs.writeFileSync("./data/data.json", string);
    return newTask;
  }
  static find(task) {
    let list = Model.list();
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === Number(task)) {
        return list[i];
      }
    }
    return -1;
  }
  static delete(task) {
    let list = Model.list();
    let result = [...list];
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === Number(task)) {
        list.splice([i], 1);
        let string = JSON.stringify(list, null, 2);
        fs.writeFileSync("./data/data.json", string);
        return result[i];
      }
    }
    return -1;
  }
  static complete(task) {
    let list = Model.list();
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === Number(task)) {
        list[i].complete = "[X]";
        let string = JSON.stringify(list, null, 2);
        fs.writeFileSync("./data/data.json", string);
        return Model.list();
      }
    }
    return -1;
  }
  static uncomplete(task) {
    let list = Model.list();
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === Number(task)) {
        list[i].complete = "[ ]";
        let string = JSON.stringify(list, null, 2);
        fs.writeFileSync("./data/data.json", string);
        return Model.list();
      }
    }
    return -1;
  }
}
module.exports = Model;
