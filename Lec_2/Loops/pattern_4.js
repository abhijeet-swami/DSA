// 1
// 22
// 333
// 4444
// 55555

const N = 5;

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(`${i}`);
  }
  console.log();
}

for (let i = 1; i <= 5; i++) {
  process.stdout.write(`${i}`.repeat(i));
  console.log();
}
