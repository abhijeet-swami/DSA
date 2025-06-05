// Print in terms of N to 1, example if N = 4. Output: 4 3 2 1

function Solution(N) {
  if (N < 1) return;

  console.log(N);
  Solution(--N);
}

Solution(4);
