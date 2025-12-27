// Print names N times

function printName(n, name) {
  if (n < 1) return;
  console.log(name);
  printName(n - 1, name);
}

printName(4, "Alex");
