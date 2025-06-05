// Factorial of N
// Example N = 4
// Output: (4x3x2x1) 24

function Solution(N) {
  if (N < 1) return 1;
  let x = Solution(N - 1);
  return x * N;
}

console.log(Solution(4));
