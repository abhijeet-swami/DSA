// Insertion Sort

const arr = [12, 3, 56, 32, 1, 9];

for (let i = 1; i < arr.length; i++) {
  let k = i;
  while (k > 0 && arr[k - 1] > arr[k]) {
    [arr[k - 1], arr[k]] = [arr[k], arr[k - 1]];
    k--;
  }
}

console.log(arr);
