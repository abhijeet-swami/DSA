// Second Largest Element

function secondLargestElement(nums) {
  let max = Math.max(...nums);
  nums = nums.filter((x) => x !== max);
  if (nums.length < 1) return -1;
  return Math.max(...nums);
}

console.log(secondLargestElement([7, 7, 2, 2, 10, 3, 10]));
