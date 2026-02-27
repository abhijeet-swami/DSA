function majorityElement(nums) {
  let el1 = nums[0],
    el2 = nums[0],
    c1 = 0,
    c2 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (c1 === 0 && el2 !== nums[i]) {
      el1 = nums[i];
      c1++;
    } else if (c2 === 0 && el1 !== nums[i]) {
      el2 = nums[i];
      c2++;
    } else if (el1 === nums[i]) {
      c1++;
    } else if (el2 === nums[i]) {
      c2++;
    } else {
      c1--;
      c2--;
    }
  }

  c1 = 0;
  c2 = 0;
  for (let x of nums) {
    if (x === el1) c1++;
    if (x === el2) c2++;
  }

  let arr = [];
  let l = Math.floor(nums.length / 3);
  if (c1 > l) arr.push(el1);
  if (c2 > l) arr.push(el2);

  return arr;
}

let nums = [-1, -1, -2, -2];
console.log(majorityElement(nums));
