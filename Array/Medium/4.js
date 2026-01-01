// Maximum Subarray

function maxSubArray(nums) {
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sum < 0) sum = 0;
    sum += nums[i];
    max = Math.max(max, sum);
  }
  return max;
}

const nums = [5, 4, -1, 7, 8];
console.log(maxSubArray(nums));
