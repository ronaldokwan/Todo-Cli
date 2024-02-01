// your commands in here
const input = process.argv;
const command = input[2];
const command2 = input[3];
const Controller = require("./controllers/controller");
if (command === "help" || command === undefined) {
  Controller.help();
} else if (command === "list") {
  Controller.list();
} else if (command === "add") {
  Controller.add(command2);
} else if (command === "findById") {
  Controller.find(command2);
} else if (command === "delete") {
  Controller.delete(command2);
} else if (command === "complete") {
  Controller.complete(command2);
} else if (command === "uncomplete") {
  Controller.uncomplete(command2);
} else {
  Controller.error("Invalid command");
}
