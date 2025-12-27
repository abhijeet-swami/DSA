// Check if the Number is Armstrong

function isArmstrong(n) {
  if (n < 0) return false;

  const digits = String(n).split("");
  const power = digits.length;

  let sum = 0;
  for (const d of digits) {
    sum += Number(d) ** power;
  }

  return sum === n;
}

console.log(isArmstrong(153));
console.log(isArmstrong(-153));
