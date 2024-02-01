class View {
  static error(err) {
    console.log(err);
  }
  static help() {
    console.log(" $ node todo.js");
    console.log(" $ node todo.js help");
    console.log(" $ node todo.js list");
    console.log(" $ node todo.js add <task_content>");
    console.log(" $ node todo.js findById <task_id>");
    console.log(" $ node todo.js delete <task_id>");
    console.log(" $ node todo.js complete <task_id>");
    console.log(" $ node todo.js uncomplete <task_id>");
  }
  static show(list) {
    for (let i = 0; i < list.length; i++) {
      let temp;
      if (list[i].complete === false) {
        temp = "[ ]";
      } else {
        temp = "[X]";
      }
      console.log(list[i].id + ". " + temp + " " + list[i].task);
    }
  }

  static add(newTask) {
    console.log(`Success adding ${newTask.task} to the database`);
  }

  static delete(deleteTask) {
    console.log(`DELETED "${deleteTask.task}" from your TODO list...`);
  }
}
module.exports = View;
