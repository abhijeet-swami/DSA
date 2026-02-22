function setZeroes(matrix) {
  let zeroes = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        zeroes.push([i, j]);
      }
    }
  }

  zeroes.forEach(([r, c]) => {
    for (let i = 0; i < matrix[r].length; i++) matrix[r][i] = 0;
    for (let i = 0; i < matrix.length; i++) matrix[i][c] = 0;
  });

  return matrix;
}

let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

console.log(setZeroes(matrix));
