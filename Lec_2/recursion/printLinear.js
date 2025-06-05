// Print (1 to N), if N=4 than output: 1 2 3 4

function Solution(N) {
  if (N < 1) return;

  Solution(N - 1);
  console.log(N);
}

Solution(109);
