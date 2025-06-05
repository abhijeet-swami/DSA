// Given an integer N, check whether it is prime or not. A prime
// number is a number that is only divisible by 1 and itself and
// the total number of divisors is 2.

function Solution(num) {
  if (num <= 1) return false;
  const to = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= to; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(Solution(12));
