// Rotate Array Right K Steps

function rotate(nums, k) {
  let b = [];
  if (nums.length < k) k = k % nums.length;
  if (nums.length > 1) {
    while (k > 0) {
      let v = nums.pop();
      if (v) b.push(v);
      k--;
    }
    nums.unshift(...b.reverse());
  }
  return nums;
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
