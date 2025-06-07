// Selection Sort
// Step 1: Find the min element in array and replace it with index 0.
// Step 2: Again find the min element in the array and replace it with index 1.
// Step 3: Repeat.

const arr = [23, 1, 45, 65, 54, 3, 2];

for (let i = 0; i < arr.length; i++) {
  let min = arr[i];
  let select = i;
  for (let j = i; j < arr.length; j++) {
    if (arr[j] < min) {
      min = arr[j];
      select = j;
    }
  }
  [arr[i], arr[select]] = [arr[select], arr[i]];
}

console.log(arr);
