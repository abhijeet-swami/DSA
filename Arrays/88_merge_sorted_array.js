function merge(nums1, m, nums2, n) {
  let i = 0;
  let k = 0;
  let l = 0;
  let arr = [];

  while (i < m && k < n) {
    arr[l++] = nums1[i] < nums2[k] ? nums1[i++] : nums2[k++];
  }
  while (i < m) arr[l++] = nums1[i++];
  while (k < n) arr[l++] = nums2[k++];

  nums1 = arr;
  return nums1;
}

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

console.log(merge(nums1, m, nums2, n));
