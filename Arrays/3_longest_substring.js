function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let map = new Map();
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    if (map.has(s[end])) {
      start = Math.max(start, map.get(s[end]) + 1);
    }
    map.set(s[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

let s = "abba";
console.log(lengthOfLongestSubstring(s));
