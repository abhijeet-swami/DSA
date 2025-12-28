// Insertion Sort

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
    console.log(arr);
  }
  return arr;
}

console.log(insertionSort([14, 9, 15, 12]));
