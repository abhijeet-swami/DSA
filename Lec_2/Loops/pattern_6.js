//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const N = 5;
for (let i = 0; i < N; i++) {
  for (let j = N; j > i; j--) {
    process.stdout.write(" ");
  }
  for (let k = 0; k <= i; k++) {
    process.stdout.write("*");
  }
  for (let l = 0; l < i; l++) {
    process.stdout.write("*");
  }
  console.log();
}

for (let i = N; i > 0; i--) {
  process.stdout.write(" ".repeat(i));
  const r = N - i + 1;
  process.stdout.write("*".repeat(r));
  process.stdout.write("*".repeat(r - 1));
  console.log();
}
