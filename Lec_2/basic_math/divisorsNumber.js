// You are given an integer n. You need to find all the divisors of n. Return all the divisors of n as an array or list in a sorted order.
// A number which completely divides another number is called it's divisor.

// Examples:
// Input: n = 6
// Output = [1, 2, 3, 6]
// Explanation: The divisors of 6 are 1, 2, 3, 6.

// Input: n = 8
// Output: [1, 2, 4, 8]
// Explanation: The divisors of 8 are 1, 2, 4, 8.

function Solution(num) {
  const arr = [];
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) arr.push(i);
  }
  arr.push(num);
  return arr;
}

console.log(Solution(8));
