/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix === null || matrix.length === 0 || matrix[0].length === 0 || target < matrix[0][0] || target > matrix[matrix.length - 1][matrix[0].length - 1]) {
        return false;
    }

    // going through row
    let left = 0,
        right = matrix.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (matrix[mid][0] === target) return true;
        if (matrix[mid][0] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    let row = right;
    if (row < 0) return false;

    let l = 0,
        r = matrix[0].length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (matrix[row][mid] === target) return true;
        if (matrix[row][mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return false;
};

/*

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false

*/