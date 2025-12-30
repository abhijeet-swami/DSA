// Max Consecutive Ones

function maxConsecutive(nums) {
  let max = 0;
  let curr = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      curr++;
      if (curr > max) max = curr;
    } else {
      curr = 0;
    }
  }

  return max;
}

const nums = [0, 0, 0, 1, 1, 1, 0, 1, 1];

console.log(maxConsecutive(nums));
