function longestConsecutive(nums) {
  let set = new Set(nums);

  let longest = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let currLongest = 1;
      let i = num;
      while (set.has(i + 1)) {
        currLongest++;
        i++;
      }
      longest = Math.max(longest, currLongest);
    }
  }

  return longest;
}

let nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));
