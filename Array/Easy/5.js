// Move Zeroes To The End

function moveZeros(nums) {
  let insert = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insert++] = nums[i];
    }
  }

  while (insert < nums.length) {
    nums[insert++] = 0;
  }
  return nums;
}

console.log(moveZeros([0, 1, 3, 3, 12]));
