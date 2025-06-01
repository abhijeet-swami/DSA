// Theory on Loops in JavaScript

// Loops are used in JavaScript to **execute a block of code multiple times** until a condition is met. They're very useful when you want to run the same task repeatedly without rewriting the code.

// Why use loops?

// * To avoid repeating code manually.
// * To go through arrays or objects.
// * To perform tasks a certain number of times.

// 1. for loop

// Used when you know how many times to loop.

for (let i = 0; i < 5; i++) {
  console.log("Number:", i);
}

// * `i = 0`: start point
// * `i < 5`: condition to continue
// * `i++`: increment step

// 2. while loop

// Used when the number of iterations is not known beforehand.

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// 3. `do...while` loop

// Similar to `while`, but runs **at least once**, even if the condition is false.

i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

// 4. **`for...of` loop**

// Used to loop over **arrays, strings, etc.

let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

let person = { name: "Alice", age: 25 };
for (let key in person) {
  console.log(key, person[key]);
}

// Summary

// | Loop Type    | Use Case                              |
// | ------------ | ------------------------------------- |
// | `for`        | Known number of repetitions           |
// | `while`      | Unknown number, condition-based       |
// | `do...while` | Run once, then check condition        |
// | `for...of`   | Loop through values (arrays, strings) |
// | `for...in`   | Loop through object keys              |
