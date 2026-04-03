const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasksFile = path.join(__dirname, "tasks.json");

function loadTasks() {
  const fileText = fs.readFileSync(tasksFile, "utf8");
  return JSON.parse(fileText);
}

function saveTasks(tasks) {
  fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
}

function showTasks(tasks) {
  if (tasks.length === 0) {
    console.log("No tasks yet.");
    return;
  }

  console.log("\nYour tasks:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

function showMenu() {
  console.log("\nTo-Do List");
  console.log("1. View tasks");
  console.log("2. Add a task");
  console.log("3. Delete a task");
  console.log("4. Exit");

  rl.question("Choose an option: ", (answer) => {
    const tasks = loadTasks();

    if (answer === "1") {
      showTasks(tasks);
      showMenu();
    } else if (answer === "2") {
      rl.question("Enter a new task: ", (newTask) => {
        if (newTask.trim() === "") {
          console.log("Task cannot be empty.");
        } else {
          tasks.push(newTask.trim());
          saveTasks(tasks);
          console.log("Task added.");
        }
        showMenu();
      });
    } else if (answer === "3") {
      showTasks(tasks);
      rl.question("Enter the number of the task to delete: ", (taskNumber) => {
        const index = Number(taskNumber) - 1;

        if (!Number.isInteger(index) || index < 0 || index >= tasks.length) {
          console.log("That task number is not valid.");
        } else {
          const removedTask = tasks.splice(index, 1);
          saveTasks(tasks);
          console.log(`Deleted: ${removedTask[0]}`);
        }
        showMenu();
      });
    } else if (answer === "4") {
      console.log("Goodbye!");
      rl.close();
    } else {
      console.log("Please choose 1, 2, 3, or 4.");
      showMenu();
    }
  });
}

showMenu();
