// Print 1 to N using Recursion

(function printNumbers(n) {
  if (n === 0) return;
  printNumbers(n - 1);
  console.log(n);
})(5);
