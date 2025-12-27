// Reverse Integer

function reverse(x) {
  let rev = 0;
  let isNeg = false;
  const INT_MAX = 214748364;
  if (x < 0) {
    isNeg = true;
    x = Math.abs(x);
  }
  while (x !== 0) {
    let digit = x % 10;
    x = Math.floor(x / 10);
    if (rev > INT_MAX || (rev === INT_MAX && digit > 7)) return 0;
    rev = rev * 10 + digit;
  }
  return !isNeg ? rev : -rev;
}

console.log(reverse(-123));
