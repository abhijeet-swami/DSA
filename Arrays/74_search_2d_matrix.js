function findTarget(matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  let total = m * n;
  let low = 0;
  let high = total - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let row = Math.floor(mid / n);
    let column = Math.floor(mid % n);

    if (matrix[row][column] === target) {
      return true;
    } else if (matrix[row][column] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return false;
}

let matrix = [[1]];
let target = 3;

console.log(findTarget(matrix, target));
