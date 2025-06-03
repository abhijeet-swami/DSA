// You are given two integers n1 and n2. You need find the Greatest Common Divisor (GCD) of the two given numbers. Return the GCD of the two numbers.

// The Greatest Common Divisor (GCD) of two integers is the largest positive integer that divides both of the integers.

// Examples:
// Input: n1 = 4, n2 = 6
// Output: 2
// Explanation: Divisors of n1 = 1, 2, 4, Divisors of n2 = 1, 2, 3, 6
// Greatest Common divisor = 2.

// Input: n1 = 9, n2 = 8
// Output: 1
// Explanation: Divisors of n1 = 1, 3, 9 Divisors of n2 = 1, 2, 4, 8.
// Greatest Common divisor = 1.

function Solution(n1, n2) {
  let arr1 = [n1];
  let arr2 = [n2];

  for (let i = 1; i <= n1 / 2; i++) {
    if (n1 % i === 0) arr1.push(i);
  }
  for (let i = 1; i <= n2 / 2; i++) {
    if (n2 % i === 0) arr2.push(i);
  }

  let newarr1 = arr1.length > arr2.length ? arr2 : arr1;
  let newarr2 = arr1.length > arr2.length ? arr1 : arr2;
  let gcd = 0;

  newarr1.forEach((num) => {
    if (newarr2.includes(num) && num > gcd) {
      gcd = num;
    }
  });
  return gcd;
}

// function Solution(n1, n2) {
//   while (n2 !== 0) {
//     [n1, n2] = [n2, n1 % n2];
//   }
//   return n1;
// }

console.log(Solution(9, 8));
