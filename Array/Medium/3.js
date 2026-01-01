// Majority Element

function majorityElement(nums) {
  let element;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count < 1) {
      element = nums[i];
      count = 0;
    }
    if (nums[i] !== element) {
      count--;
    } else if (nums[i] === element) {
      count++;
    }
  }
  return element;
}

console.log(majorityElement([3, 2, 3]));
