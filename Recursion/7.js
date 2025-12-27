// Check if a string is palindrome or not

function isPalindrome(s, head, tail) {
  if (head >= tail) return true;
  if (s[head] !== s[tail] && head < tail) return false;
  return isPalindrome(s, head + 1, tail - 1);
}

const s = "tennet";
console.log(isPalindrome(s, 0, s.length - 1));
