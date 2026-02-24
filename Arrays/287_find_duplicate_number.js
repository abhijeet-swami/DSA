function findDuplicate(nums) {
  let start = 0;
  let end = 0;

  do {
    start = nums[start];
    end = nums[nums[end]];
  } while (start !== end);

  end = 0;
  while (start !== end) {
    start = nums[start];
    end = nums[end];
  }

  return start;
}

let nums = [1, 3, 4, 2, 4];
console.log(findDuplicate(nums));
