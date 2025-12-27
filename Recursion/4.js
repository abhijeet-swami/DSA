// Sum of first N numbers

function numbersSum(n) {
  if (n < 1) return 0;
  let sum = numbersSum(n - 1);
  return sum + n;
}

console.log(numbersSum(4));
