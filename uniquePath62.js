// recursion way 
// var matrix = {};
// var uniquePaths = function(m, n) {
//     if (m < 0 || n < 0) return 0;
//     if (m === 1 && n === 1) return 1;


//     if (matrix[m] && matrix[m][n]) {
//         return matrix[m][n];
//     }

//     if (matrix[n] && matrix[n][m]) {
//         return matrix[n][m];
//     }

//     if (matrix[m] === undefined) {
//         matrix[m] = {}
//     }

//     let left_paths = uniquePaths(m - 1, n);
//     let right_paths = uniquePaths(m, n - 1);

//     const result = left_paths + right_paths;
//     matrix[m][n] = result;

//     return result;

// };

// Dynamic Programming way 
// DP 思路
// 状态变化
// init
// 方程
// 结果
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */


var uniquePaths = function(m, n) {
    // 越界 out bound
    if (m < 0 || n < 0) return 0;
    if (m === 1 && n === 1) return 1;

    // 创建一个二维数组 by m(row), n(col)
    let matrix = new Array(m).fill(Array(n).fill(1));

    // initial value 以上已经做了初始化全部，第一行和第一列 全部初始化已经是1，不用管遍历剩下的地方
    for (let i = 0; i < m; i++) {
        matrix[i][0] = 1;
    }

    for (let j = 0; j < n; j++) {
        matrix[0][j] = 1;
    }

    // [1,1]
    // [1,1]
    // [1,1]
    // 转移方程式 function = dp = dp[m - 1][n] + dp[m][n - 1]
    // 一下遍历已经排除了第一行和第一列，开始对每一个格子计算
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
        }
    }

    return matrix[m - 1][n - 1];
};

console.log(uniquePaths(3, 2));

/*

Note: m and n will be at most 100.

Example 1:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right

*/