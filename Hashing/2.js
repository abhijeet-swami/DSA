const arr = [1, 2, 1, "a", "z", 2, "a", 3, "k"];
const hash = new Map();

arr.forEach((i) => {
  hash.set(i, (hash.get(i) || 0) + 1);
});

const arr2 = [];
for (const [x, y] of hash) {
  arr2.push([x, y]);
}
console.log(arr2);
