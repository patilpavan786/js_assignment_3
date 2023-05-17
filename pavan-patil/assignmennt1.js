// 1. Create a JavaScript function called counter that returns another function.
// 2. The returned function should increment a counter variable defined in counter
// function by 1 each time it is called.
// 3. Implement the counter function using closures.
// 4. Create two instances of the counter function: counter1 and counter2.
// 5. Call counter1 three times and display the result after each call.
// 6. Call counter2 five times and display the result after each call.
// Example Output:
// 1
// 2
// 3
// 1
// 2
// 3
// 4
// 5
// Note: Make sure to demonstrate the use of closures in your solution.


// function counter() {
//     let count = 0;
  
//     function increment() {
//       count++;
//       return count;
//     }
  
//     return increment;
//   }
  
//   // Creating two instances of the counter function
//   const counter1 = counter();
//   const counter2 = counter();
  
//   // Calling counter1 three times and displaying the result after each call
//   console.log(counter1()); // 1
//   console.log(counter1()); // 2
//   console.log(counter1()); // 3
  
//   // Calling counter2 five times and displaying the result after each call
//   console.log(counter2()); // 1
//   console.log(counter2()); // 2
//   console.log(counter2()); // 3
//   console.log(counter2()); // 4
//   console.log(counter2()); // 5
  

//..............................................................

// Instructions:
// 1. Create a JavaScript higher-order function called calculate that takes two
// numbers and a callback function as arguments.
// 2. The calculate function should invoke the callback function with the two
// numbers as parameters and return the result.
// 3. Implement three different callback functions: add, subtract, and multiply.
// ● The add function should return the sum of the two numbers.
// ● The subtract function should return the difference between the two
// numbers.
// ● The multiply function should return the product of the two numbers.
// 4. Use the calculate function to perform the following calculations:
// ● Invoke calculate with the numbers 5 and 3 and the add function.
// Display the result.
// ● Invoke calculate with the numbers 10 and 4 and the subtract
// function. Display the result.
// ● Invoke calculate with the numbers 7 and 2 and the multiply function.
// Display the result.
// Example Output:
// 8
// 6
// 14  


// function calculate(num1, num2, callback) {
//     return callback(num1, num2);
//   }
  
//   function add(num1, num2) {
//     return num1 + num2;
//   }
  
//   function subtract(num1, num2) {
//     return num1 - num2;
//   }
  
//   function multiply(num1, num2) {
//     return num1 * num2;
//   }
  
//   // Using the calculate function to perform calculations
//   console.log(calculate(5, 3, add)); // 8
//   console.log(calculate(10, 4, subtract)); // 6
//   console.log(calculate(7, 2, multiply)); // 14
  


//..............................................................

// Instructions:
// 1. Create a JavaScript function using each of the following methods:
// a) Function Declaration: Create a function named addTask that takes a task
// name as a parameter and adds it to a task management system.
// b) Function Expression: Create a function expression called completeTask
// that takes a task ID as a parameter and marks the corresponding task as
// completed in the task management system.
// c) Arrow Function: Create an arrow function named getTasks that takes no
// parameters and returns an array of all the tasks in the task management
// system.
// 2. Implement a task management system using an array to store the tasks. The
// tasks should be objects with the following properties: id, name, and
// completed.
// 3. Use the addTask function to add at least three tasks to the task management
// system.
// 4. Use the completeTask function to mark one of the tasks as completed.
// 5. Use the getTasks function to retrieve all the tasks from the task management
// system and display them.
// Example Output:
// Tasks:
// ● Task 1: Buy groceries (Completed)
// ● Task 2: Clean the house
// ● Task 3: Finish the report
 


// Task management system
// const tasks = [];

// // Function Declaration: addTask
// function addTask(taskName) {
//   const task = {
//     id: tasks.length + 1,
//     name: taskName,
//     completed: false
//   };

//   tasks.push(task);
// }

// // Function Expression: completeTask
// const completeTask = function(taskId) {
//   const task = tasks.find(task => task.id === taskId);

//   if (task) {
//     task.completed = true;
//   }
// }

// // Arrow Function: getTasks
// const getTasks = () => tasks;

// // Adding tasks
// addTask("Buy groceries");
// addTask("Clean the house");
// addTask("Finish the report");

// // Marking a task as completed
// completeTask(1);

// // Displaying tasks
// console.log("Tasks:");
// getTasks().forEach(task => {
//   const status = task.completed ? "(Completed)" : "";
//   console.log(`- Task ${task.id}: ${task.name} ${status}`);
// });


//..............................................................

// Instructions:
// 1. Create a JavaScript program that demonstrates hoisting in action.
// 2. Implement a function named calculateAge that takes a birth year as a
// parameter and calculates the age based on the current year.
// 3. Call the calculateAge function before its actual declaration in your code.
// 4. Assign the result of the function call to a variable named age.
// 5. Display the age variable's value in the console.


// calculateAge(1990);

// function calculateAge(birthYear) {
//   const currentYear = new Date().getFullYear();
//   const age = currentYear - birthYear;

//   console.log("Age:", age);
// }



//..............................................................

// Instructions:
// 1. Imagine you are building a social media platform that allows users to create
// profiles and interact with posts.
// 2. Create a JavaScript program that demonstrates the usage of the "this"
// keyword in the context of a social media user.
// 3. Implement an object called User with the following properties and methods:
// ● Properties:
// ● name: The name of the user.
// ● age: The age of the user.
// ● posts: An array to store the user's posts.
// ● Methods:
// ● createPost: A method that takes a post content as a parameter
// and adds it to the posts array. The post should include the user's
// name and age.
// ● listPosts: A method that displays all the posts created by the
// user.
// ● getProfileInfo: A method that displays the user's name and
// age.
// 4. Create multiple instances of the User object, each representing a different
// user.
// 5. Call the createPost method for each user to create posts.
// 6. Call the listPosts method for each user to display their respective posts.
// 7. Call the getProfileInfo method for each user to display their profile
// information.
// Example Output:
// User 1:
// Name: John
// Age: 25
// Posts:
// ● Post 1: "Hello, everyone!"
// ● Post 2: "Enjoying a beautiful day!"
// User 2:
// Name: Emily
// Age: 30
// Posts:
// ● Post 1: "Excited for the weekend!"
// ● Post 2: "Just finished reading a great book!"


// User object constructor
// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.posts = [];
  
//     this.createPost = function(postContent) {
//       const post = `Post ${this.posts.length + 1}: "${postContent}"`;
//       this.posts.push(post);
//     };
  
//     this.listPosts = function() {
//       console.log("Posts:");
//       this.posts.forEach(post => {
//         console.log(`- ${post}`);
//       });
//     };
  
//     this.getProfileInfo = function() {
//       console.log("Name:", this.name);
//       console.log("Age:", this.age);
//     };
//   }
  
//   // Creating instances of User
//   const user1 = new User("John", 25);
//   const user2 = new User("Emily", 30);
  
//   // Creating posts for user1
//   user1.createPost("Hello, everyone!");
//   user1.createPost("Enjoying a beautiful day!");
  
//   // Creating posts for user2
//   user2.createPost("Excited for the weekend!");
//   user2.createPost("Just finished reading a great book!");
  
//   // Displaying user profiles and posts
//   console.log("User 1:");
//   user1.getProfileInfo();
//   user1.listPosts();
  
//   console.log("User 2:");
//   user2.getProfileInfo();
//   user2.listPosts();
  


 //..............................................................