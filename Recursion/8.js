// Fibonacci Number

function fibonacci(n, a = 0, b = 1) {
  if (n === 0) return a;
  let sum = fibonacci(n - 1, b, a + b);
  return sum;
}

console.log(fibonacci(4));
