// You are given an integer n. You need to check whether the number is a palindrome number or not. Return true if it's a palindrome number, otherwise return false.

// A palindrome number is a number which reads the same both left to right and right to left.

// Examples:
// Input: n = 121
// Output: true
// Explanation: When read from left to right : 121.

// When read from right to left : 121.
// Input: n = 123
// Output: false
// Explanation: When read from left to right : 123.
// When read from right to left : 321.

// function Solution(number) {
//   let rev = String(number).split("").reverse().join("");
//   return number == rev;
// }

function Solution(number) {
  if (number < 0) return false;
  let num = number;
  let revNum = 0;

  while (num != 0) {
    revNum = (num % 10) + revNum * 10;
    num = Math.floor(num / 10);
  }

  return revNum === number;
}

console.log(Solution(121));
