function rotate(matrix) {
  let i = 0;
  let j = i;

  while (i < matrix.length) {
    if (i !== j) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
    j++;
    if (j >= matrix.length) {
      i++;
      j = i;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    let k = 0;
    let l = matrix[i].length - 1;

    while (k < l) {
      [matrix[i][k], matrix[i][l]] = [matrix[i][l], matrix[i][k]];
      k++;
      l--;
    }
  }
  return matrix;
}

let matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
console.log(rotate(matrix));
