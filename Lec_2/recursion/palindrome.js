// Given a string s, return true if the string is
// palindrome, otherwise false.
// A string is called palindrome if it reads the same
// forward and backward.

// Examples:
// Input : s = "hannah"
// Output : true
// Explanation : The string when reversed is -->
// "hannah", which is same as original string , so we
// return true.

// Input : s = "aabbaaa"
// Output : false
// Explanation : The string when reversed is -->
// "aaabbaa", which is not same as original string, So
// we return false.

function Solution(str, len, i = 0) {
  if (len <= i) {
    return true;
  }
  if (str[i] != str[len]) {
    return false;
  }
  let x = Solution(str, len - 1, i + 1);
  return x;
}

const str = "atkkta";
console.log(Solution(str, str.length - 1));
