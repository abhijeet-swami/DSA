// JavaScript Functions - Theory

// Functions are reusable blocks of code that perform a specific task.
// They help in writing clean, DRY (Don't Repeat Yourself) code.

// You can define a function once and call it as many times as needed.

// Function Declaration
// Traditional way to define a function

function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Alice")); // Output: Hello, Alice

// Function Expression
// A function assigned to a variable

const add = function (a, b) {
  return a + b;
};

console.log(add(2, 3)); // Output: 5

// Arrow Function (ES6+)
// Shorter syntax, often used for cleaner code

const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(4, 5)); // Output: 20

// One-liner version (if only one expression and one return)
const square = (x) => x * x;
console.log(square(6)); // Output: 36

// Function with Default Parameters
// You can give default values to function parameters

function greetUser(name = "Guest") {
  return `Welcome, ${name}!`;
}

console.log(greetUser()); // Output: Welcome, Guest!

// Function with Rest Parameters
// Rest parameter allows a function to accept multiple arguments as an array

function sumAll(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10

// Callback Functions
// A function passed as an argument to another function

function processUserInput(callback) {
  const name = "John";
  callback(name);
}

processUserInput(function (name) {
  console.log("Welcome, " + name); // Output: Welcome, John
});

// Anonymous Functions
// Functions without a name, often used as callbacks

setTimeout(function () {
  console.log("This runs after 1 second");
}, 1000);

// IIFE (Immediately Invoked Function Expression)
// A function that runs as soon as it's defined

(function () {
  console.log("IIFE executed immediately!");
})();

// Summary
// - Function Declaration: `function greet() {}`
// - Function Expression: `const fn = function() {}`
// - Arrow Function: `const fn = () => {}`
// - Default Parameters: function with default values
// - Rest Parameters: use `...` to accept many arguments
// - Callback: passing a function as an argument
// - Anonymous: function with no name
// - IIFE: auto-executing function

// Functions are essential for structuring code and avoiding repetition!
