// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// function newTask(title, description) {
//   taskTitles.push(title);
//   taskDescriptions.push(description);
//   taskComplete.push(false);
// };

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// };

// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// };

// we set up everything under a new task function to allow the to do list to have new tasks added easily.
const newTask = function(title, description) {
  // moving the previous multi array set up to a single object
  const task = {
    title: title,
    description: description,
    complete: false,
    // moving the two functions perviously run outside of the object to be within the object
    // this allows us to condese the code to a singular object and run it more simply using the dot method approach.
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    mrkcomplete: function() {
      this.complete = true;
    }
  };
  return task;
};

// DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// Examples of additional tasks being added to the task object.
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const task = [task1, task2];

// const logTaskState = function(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// };

// const completeTask = function(task) {
//   task.complete = true;
// };

// after the refactoring all we need to do is the following to update our to do list!!
task1.logState(); // Clean Cat Litter has not been completed
task1.mrkcomplete();
task1.logState(); // Clean Cat Litter has been completed


console.log(task);
