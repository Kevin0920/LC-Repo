/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    if (n <= 0) {
        return 0;
    }

    const dp = Array(n + 1).fill(Number.MAX_VALUE);
    console.log(dp)
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            // 不选（dp[i]） 还是  选（dp[i - j * j]）
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }

    return dp[n];
};

/*
 * 使用DP来计算
 * 红色部分表示平方数，所有的数都可以看做一个普通数加上一个完美平方数，
 * 那么递推式就变为了：dp[i + j * j] = Math.min(dp[i] + 1, dp[i + j * j])。
————————————————
Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

Example 1:

Input: n = 12
Output: 3 
Explanation: 12 = 4 + 4 + 4.
Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.

*/