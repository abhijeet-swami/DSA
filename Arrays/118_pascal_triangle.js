function pascalTriangle(numRows) {
  let arr = [[1]];
  let i = 0;

  while (numRows > 1) {
    numRows--;

    let subArr = [1];
    for (let j = 0; j < arr[i].length - 1; j++) {
      let sum = arr[i][j] + arr[i][j + 1];
      subArr.push(sum);
    }
    subArr.push(1);
    arr.push(subArr);
    i++;
  }

  return arr;
}

console.log(pascalTriangle(5));
