// GCD of Two Numbers

function GCD(n1, n2) {
  if (n1 <= 0) {
    return n2;
  }
  let max = Math.max(n1, n2);
  let min = Math.min(n1, n2);
  let gcd = GCD(max - min, min);
  return gcd;
}

console.log(GCD(4, 6));
