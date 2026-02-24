function mergeIntervals(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);

  let i = 1;
  let arr = [intervals[i - 1]];
  let k = 0;

  while (i < intervals.length) {
    if (arr[k][1] >= intervals[i][0]) {
      arr[k][1] = intervals[i][1] > arr[k][1] ? intervals[i][1] : arr[k][1];
    } else {
      k++;
      arr.push(intervals[i]);
    }
    i++;
  }
  return arr;
}

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(mergeIntervals(intervals));
