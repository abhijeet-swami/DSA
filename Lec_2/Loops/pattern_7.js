//  *********
//   *******
//    *****
//     ***
//      *

const N = 5;

for (let i = 0; i < N; i++) {
  for (let k = 0; k < i; k++) {
    process.stdout.write(" ");
  }
  for (let j = i; j < N; j++) {
    process.stdout.write("*");
  }
  for (let l = i + 1; l < N; l++) {
    process.stdout.write("*");
  }
  console.log();
}
