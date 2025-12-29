// Find the union of two sorted arrays

function union(nums1, nums2) {
  return [...new Set([...nums1, ...nums2])].sort((a, b) => a - b);
}

console.log(union([1, 2, 8, 9], [1, 2, 3, 4, 5]));
