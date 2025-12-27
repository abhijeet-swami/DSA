// Divisors of a Number

function divisors(n) {
  const arr = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) arr.push(i, n / i);
  }
  return arr.sort();
}

console.log(divisors(8));
