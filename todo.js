// your commands in here
const input = process.argv;
const command = input[2];
const command2 = input[3];
const Controller = require("./controllers/controller");
if (command === "help" || !command) {
  Controller.help();
} else if (command === "list" && command2 !== undefined) {
  Controller.list();
} else if (command === "add" && command2 !== undefined) {
  Controller.add(command2);
} else {
  Controller.error();
}
