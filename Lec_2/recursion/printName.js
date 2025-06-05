// Print name N times using recursion.

function Solution(name, N) {
  if (N < 1) return;

  console.log(name);
  Solution(name, --N);
}

Solution("test", 4);
