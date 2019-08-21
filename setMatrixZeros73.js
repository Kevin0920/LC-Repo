/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const zeroIndexs = [];
    let row = matrix.length,
        col = matrix[0].length,
        rowIdx = [],
        colIdx = [];
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] === 0) {
                // search for the all 0 positions in matrix, store its row and col index 
                rowIdx.push(i);
                colIdx.push(j);
            }
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (rowIdx.includes(i) || colIdx.includes(j)) {
                matrix[i][j] = 0;
            }
        }
    }
};
console.log(setZeroes(
    [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ]
))


/*

Complexity Analysis

Time Complexity: O(M \times N)O(M×N) where M and N are the number of rows and columns respectively.

Space Complexity: O(M + N)O(M+N). 


*/