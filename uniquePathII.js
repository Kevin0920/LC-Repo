/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {

    let m = obstacleGrid.length,
        n = obstacleGrid[0].length;

    if (m === 0) return 0;

    let dp = [];

    // row
    for (var i = 0; i < m; i++) {
        // 创建2D 数组
        dp[i] = [];
        if (obstacleGrid[i][0] === 1) break;
        dp[i][0] = 1;
    }
    // 创建2D 数组
    for (var j = i; j < m; j++) {
        dp[j] = [];
        dp[j][0] = 0;
    }

    for (var i = 0; i < n; i++) {
        if (obstacleGrid[0][i] == 1) break;
        dp[0][i] = 1;
    }
    // 创建2D 数组
    for (var j = i; j < n; j++) {
        dp[0][j] = 0;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[m - 1][n - 1];
};

/*

Note: m and n will be at most 100.

Example 1:

Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: 2
Explanation:
There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right

*/