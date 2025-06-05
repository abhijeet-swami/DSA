// Reverse of array

function Solution(arr, i = 0) {
  let x = arr.length - (i + 1);
  if (x < i) return arr;

  Solution(arr, i + 1, x);
  [arr[x], arr[i]] = [arr[i], arr[x]];
  return arr;
}

const arr = [1];

console.log(Solution(arr));
