
// You should implement your task here.

module.exports = function towelSort (matrix = []) {

  if (matrix.length === 0) return matrix; 

  for(el in matrix) {
    if(el % 2 !== 0) {
    matrix[el].reverse();
    }
  }
  //console.log(matrix)
  let matrixFinish = [];
  for(let el of matrix) {
    matrixFinish.push(...el);
  }

  console.log(matrixFinish)
  return matrixFinish;
}
