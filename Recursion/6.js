// Reverse an array

function reverseArray(arr, head, tail) {
  if (head >= tail) return arr;
  [arr[head], arr[tail]] = [arr[tail], arr[head]];
  reverseArray(arr, head + 1, tail - 1);
  return arr;
}
const arr = [1, 2, 3, 4, 5, 6];
console.log(reverseArray(arr, 0, arr.length - 1));
