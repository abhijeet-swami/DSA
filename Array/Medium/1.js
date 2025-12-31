// Two Sum

function twoSum(nums, target) {
  let find = 0;
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    find = target - nums[i];
    if (map.has(find)) {
      let j = map.get(find);
      return [j, i];
    }
    map.set(nums[i], i);
  }
  return -1;
}

console.log(twoSum([10, -1, 2, 8], 7));
