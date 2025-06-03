// You are given an integer n. You need to return the number of digits in the number.
// The number will have no leading zeroes, except when the number is 0 itself.

// Examples:
// Input: n = 4
// Output: 1
// Explanation: There is only 1 digit in 4.

// Input: n = 14
// Output: 2
// Explanation: There are 2 digits in 14.

// function Solution(number) {
//   const n = String(number).length;
//   console.log(n);
// }

function Solution(number) {
  if (number === 0) return 1;
  let count = 0;
  while (number != 0) {
    number = Math.floor(number / 10);
    count++;
  }
  return count;
}

console.log(Solution(1234));
