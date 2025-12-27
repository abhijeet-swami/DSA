// Print N to 1 using Recursion

(function printNumbers(n) {
  if (n === 0) return;
  console.log(n);
  printNumbers(n - 1);
})(5);
