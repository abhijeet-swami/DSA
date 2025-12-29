// Remove duplicates from sorted array

function removeDuplicates(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = null;
    }
  }
  nums = nums.filter((x) => x !== null);
  return nums;
}

console.log(removeDuplicates([1, 1, 2, 3, 4, 4, 4]));
