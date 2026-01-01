// Rearrange Array Elements by Sign

function rearrangeArray(nums) {
  const positive = [];
  const negative = [];

  nums.forEach((x) => {
    if (x < 0) {
      negative.push(x);
    } else {
      positive.push(x);
    }
  });
  let p = 0;
  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0 || i === 0) {
      nums[i] = positive[p++];
    } else {
      nums[i] = negative[n++];
    }
  }

  return nums;
}

const nums = [3, 1, -1, -2, -5, 2, -4, 2];
console.log(rearrangeArray(nums));
