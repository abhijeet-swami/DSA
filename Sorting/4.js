// Merge Sort

function merge(arr, low, high) {
  let mid = Math.floor((low + high) / 2);
  let right = [];
  let index = 0;
  for (let i = low; i <= mid; i++) {
    right[index++] = arr[i];
  }
  let left = [];
  index = 0;
  for (let i = mid + 1; i <= high; i++) {
    left[index++] = arr[i];
  }
  index = 0;
  let index2 = 0;
  let i = low;
  while (index < right.length && index2 < left.length) {
    if (right[index] < left[index2]) {
      arr[i++] = right[index++];
    } else {
      arr[i++] = left[index2++];
    }
  }
  while (index < right.length) {
    arr[i++] = right[index++];
  }
  while (index2 < left.length) {
    arr[i++] = left[index2++];
  }
  return arr;
}

function mergeSort(arr, low, high) {
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  return merge(arr, low, high);
}

const arr = [32, 21, 12, 20, 1];
console.log(mergeSort(arr, 0, arr.length - 1));
