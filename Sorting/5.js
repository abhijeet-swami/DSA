// Quick Sort

function pivot(arr, low, high) {
  let p = low;
  let [i, j] = [low + 1, high];
  while (i < j) {
    while (arr[i] <= arr[p] && i <= high) i++;
    while (arr[j] > arr[p] && j > 0) j--;
    if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  [arr[p], arr[j]] = [arr[j], arr[p]];
  return j;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let p = pivot(arr, low, high);
    quickSort(arr, low, p - 1);
    quickSort(arr, p + 1, high);
  }
  return arr;
}

const arr = [4, 12, 3, 1, 34];
console.log(quickSort(arr, 0, arr.length - 1));
