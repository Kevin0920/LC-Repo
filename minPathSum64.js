/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {

    let row = grid.length,
        col = grid[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i !== 0 && j !== 0) {
                grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
            }
            // first loop will 
            if (i === 0 && j !== 0) {
                // initial value grid[0][0]
                grid[i][j] += grid[i][j - 1];
                console.log(grid[i][j - 1]);
            }
            if (i !== 0 && j === 0) {
                grid[i][j] += grid[i - 1][j];
                console.log(grid[i - 1][j]);
            }

        }
    }
    return grid[row - 1][col - 1];
};


console.log(minPathSum(
    [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
    ]
));

/*

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.

*/