// const arr = [1, 3, 2, 1, 3, 3];
//
// const hash = [];
//
// arr.forEach((value) => {
//   hash[value] = (hash[value] || 0) + 1;
// });
//
// console.log(hash);
// console.log(hash[3]);

// const hash = {};
// let str = "abcdabejc";
// str = str.split("");
// arr.forEach((value) => {
//   hash[value] = (hash[value] || 0) + 1;
// });
//
// console.log(hash);

const arr = [1, 2, 1, "a", "z", 2, "a", 3, "k"];
const hash = new Map();

arr.forEach((i) => {
  hash.set(i, (hash.get(i) || 0) + 1);
});

console.log(hash.get("a"));
