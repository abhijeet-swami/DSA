function maxSubArray(arr) {
  let res = arr[0];
  let curr = arr[0];

  for (let i = 1; i < arr.length; i++) {
    curr = Math.max(arr[i], curr + arr[i]);
    res = Math.max(res, curr);
  }
  return res;
}

let nums = [2, 3, 5, -2, 7, -4];
console.log(maxSubArray(nums));
