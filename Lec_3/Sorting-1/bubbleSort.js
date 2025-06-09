// Bubble Sort

const arr = [13, 24, 52, 20, 45, 9];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - (i + 1); j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  console.log(i, arr);
}

console.log(arr);
