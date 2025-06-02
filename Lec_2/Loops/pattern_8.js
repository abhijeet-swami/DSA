//      *
//     ***
//    *****
//   *******
//  *********
//  *********
//   *******
//    *****
//     ***
//      *

const N = 5;

for (let i = 0; i < N; i++) {
  for (let j = i; j < N - 1; j++) {
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
  for (let j = i; j < N; j++) {
    process.stdout.write(" ");
  }
  for (let k = 0; k < i; k++) {
    process.stdout.write("*");
  }
  for (let l = 0; l < i - 1; l++) {
    process.stdout.write("*");
  }
  console.log();
}
