// Sum of first N numbers.
// Example: N = 4
// Output: 10 (1+2+3+4)

function Solution(N) {
  if (N < 1) return 0;
  let x = Solution(N - 1);
  return N + x;
}

console.log(Solution(4));
