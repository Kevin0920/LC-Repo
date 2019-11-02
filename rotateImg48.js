/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * Time complexity: n * n
 * Space: in place  O(1)
 */
var rotate = function(matrix) {
    if (matrix === null || matrix.length === 0 || matrix[0].length === 0) return;

    let top = 0,
        left = 0,
        right = matrix.length - 1, // col and row are the same 
        bottom = matrix.length - 1; // n x n matrix

    let n = matrix.length; // number of cells in one line

    while (n > 1) {
        for (let i = 0; i < n - 1; i++) {
            let temp = matrix[top][left + i];
            matrix[top][left + i] = matrix[bottom - i][left];
            matrix[bottom - i][left] = matrix[bottom][right - i];
            matrix[bottom][right - i] = matrix[top + i][right];
            matrix[top + i][right] = temp;
        }

        top++;
        left++;
        bottom--;
        right--;
        n -= 2; // 偶数值得 matrix 中间还是 2 x 2的 2D array
    }

};