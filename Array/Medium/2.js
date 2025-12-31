// Sort Colors

function sortColors(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low++], nums[mid++]] = [nums[mid], nums[low]];
    } else if (nums[mid] === 1) {
      mid++;
    } else if (nums[mid] === 2) {
      [nums[mid], nums[high--]] = [nums[high], nums[mid]];
    }
  }
  return nums;
}

const nums = [2, 1, 2, 1, 1, 0, 2];
console.log(sortColors(nums));
