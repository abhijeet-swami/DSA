function twoSum(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    } else {
      let x = target - nums[i];
      map.set(x, i);
    }
  }

  return 0;
}

let nums = [2, 15, 11, 7];
let target = 9;

console.log(twoSum(nums, target));
