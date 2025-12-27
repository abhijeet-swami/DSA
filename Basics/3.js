// Palindrome Number

// function isPalindrome(x) {
//   if (x > -1 && x == String(x).split("").reverse().join("")) return true;
//   return false;
// }

function isPalindrome(x) {
  if (x > -1) {
    let y = x;
    let z = 0;
    const INT_MAX = 214748364;
    while (y !== 0) {
      let d = y % 10;
      y = Math.floor(y / 10);
      if (z > INT_MAX || (z === INT_MAX && d > 7)) return false;
      z = z * 10 + d;
    }
    if (x === z) return true;
  }
  return false;
}

console.log(isPalindrome(-121));
