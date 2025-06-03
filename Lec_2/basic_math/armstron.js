// You are given an integer n. You need to check whether it is an armstrong number or not. Return true if it is an armstrong number, otherwise return false.

// An armstrong number is a number which is equal to the sum of the digits of the number, raised to the power of the number of digits.

// Examples:
// Input: n = 153
// Output: true
// Explanation: Number of digits : 3.
// 1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 1 + 125 + 27 = 153.
// Therefore, it is an Armstrong number.

// Input: n = 12
// Output: false
// Explanation: Number of digits : 2.
// 1 ^ 2 + 2 ^ 2 = 1 + 4 = 5.
// Therefore, it is not an Armstrong number.

function Solution(number) {
  if (number === 0) return true;

  let n = number;
  let count = 0;

  while (n != 0) {
    n = Math.floor(n / 10);
    count++;
  }

  n = number;
  let sum = 0;

  while (n != 0) {
    sum += (n % 10) ** count;
    n = Math.floor(n / 10);
  }
  return sum === number;
}

console.log(Solution(-153));
