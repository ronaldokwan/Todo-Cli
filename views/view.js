class View {
  static error() {
    console.log("error");
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
  static list(list) {
    console.table(list);
  }

  static add(newTask) {
    console.log(`Success adding ${newTask.task} to the database`);
  }
  static find(findTask) {
    console.log(findTask.id + ". " + findTask.task);
  }
  static delete(deleteTask) {
    console.log(`DELETED "${deleteTask.task}" from your TODO list...`);
  }
}
module.exports = View;
