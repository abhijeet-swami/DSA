// 1
// 12
// 123
// 1234
// 12345

const N = 5;
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(`${j}`);
  }
  console.log();
}
