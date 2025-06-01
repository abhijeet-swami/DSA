// JavaScript uses 'const', 'let', and 'var' to declare variables that can hold different data types.

// JavaScript Data Types:

// 1. Primitive Data Types (pass by value):
//    - Number: Represents numeric values (integers and floating-point numbers).
//      Example:
let count = 10;
let price = 99.99;

//    - String: Represents sequences of characters.
//      Example:
let name = "Alice";
let message = "Hello!";

//    - Boolean: Represents logical values (true or false).
//      Example:
let isTrue = true;
let hasPermission = false;

//    - Symbol (ES6): Represents a unique and immutable primitive value. Often used as keys for object properties to avoid naming collisions.
//      Example:
const uniqueID = Symbol("id");
const anotherID = Symbol("id");
console.log(uniqueID === anotherID); // Output: false

//    - null: Represents the intentional absence of a value.
//      Example:
let user = null;

//    - undefined: Represents a variable that has been declared but has not been assigned a value.
//      Example:
let city;
console.log(city); // Output: undefined

//    - BigInt (ES2020): Represents integer values that are too large to be represented by the Number type.
//      Example:
const largeNumber = 9007199254740991n;

// 2. Reference Data Types (pass by reference):
//    - Object: Represents a collection of key-value pairs.
//      Example:
const person = {
  name: "Bob",
  age: 30,
  isEmployed: true,
};

//    - Array: Represents an ordered list of items.
//      Example:
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "cherry"];

// JavaScript is a dynamically typed language. This means you don't need to explicitly declare the data type of a variable when you create it. The JavaScript interpreter automatically determines the data type based on the value assigned to the variable at runtime.

let dynamicVar = 10; // dynamicVar is now a Number
dynamicVar = "Hello"; // dynamicVar is now a String
dynamicVar = true; // dynamicVar is now a Boolean

// In contrast to statically typed languages like C/C++, where you must declare the data type of a variable (e.g., 'int x;', 'char name[20];'), JavaScript offers more flexibility in this regard.
