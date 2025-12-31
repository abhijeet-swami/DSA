// Longest subarray with sum K

function longestSubarray(nums, k) {
  let max = 0;
  let sum = 0;
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (!map.has(sum)) {
      map.set(sum, i);
    }
    if (sum === k) max = i + 1;
    let diff = sum - k;
    let len = map.get(diff);
    if (len !== undefined) {
      let x = i - len;
      if (max < x) max = x;
    }
  }
  console.log(map);
  return max;
}

console.log(longestSubarray([10, 5, 2, 7, 1, 9], 15));
