function sortColors(arr) {
  let white = 0;
  let length = arr.length;
  let s = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      white++;
    } else if (arr[i] === 0) {
      arr[s++] = 0;
    }
  }
  while (s < length) {
    if (white > 0) {
      arr[s++] = 1;
      white--;
    } else {
      arr[s++] = 2;
    }
  }
  return arr;
}

let nums = [2, 1, 2, 1, 1, 2];

console.log(sortColors(nums));
