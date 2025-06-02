// *
// **
// ***
// ****
// *****

const N = 5;

// Time complexity o(n^2/2)
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Time complexity o(n)
for (let i = 0; i < 5; i++) {
  console.log("*".repeat(i + 1));
}
