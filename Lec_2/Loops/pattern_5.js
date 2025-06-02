// *****
// ****
// ***
// **
// *

const N = 5;

for (let i = N; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    process.stdout.write("*");
  }
  console.log();
}

for (let i = N; i > 0; i--) {
  process.stdout.write("*".repeat(i));
  console.log();
}
