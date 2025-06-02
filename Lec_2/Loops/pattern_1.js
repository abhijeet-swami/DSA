// *****
// *****
// *****
// *****
// *****

const N = 5;

// Time complexity o(N^2)
// for (let i = 0; i < N; i++) {
//   for (let j = 0; j < N; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Time complexity o(N)
for (let i = 0; i < N; i++) {
  console.log("*".repeat(N));
}
