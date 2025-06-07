// Counting frequencies of array elements.

const arr = [2, 4, 6, 45, 345, 4, 6, 2];

const arrMap = new Map();

arr.forEach((v) => {
  arrMap.set(v, (arrMap.get(v) || 0) + 1);
});

console.log(arrMap?.get(5) || 0);
