// Factorial of N numbers

function factorial(n) {
  if (n === 1 || n === 0) return 1;
  let fac = factorial(n - 1);
  return fac * n;
}

console.log(factorial(5));
