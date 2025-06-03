// You are given an integer n. Return the integer formed by placing the digits of n in reverse order.

// Examples:
// Input: n = 25
// Output: 52
// Explanation: Reverse of 25 is 52.

// Input: n = 123
// Output: 321
// Explanation: Reverse of 123 is 321.

function Solution(number) {
  let revNum = 0;
  while (number != 0) {
    revNum = (number % 10) + revNum * 10;
    number = Math.floor(number / 10);
  }
  return revNum;
}

console.log(Solution(23));
