/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // amount 0 can be reached 
    var dp = [0],
        i, j, min;


    for (i = 1; i <= amount; i++) {

        min = Infinity;

        for (j = 0; j < coins.length; j++)

            if (i - coins[j] >= 0) {

                min = Math.min(min, dp[i - coins[j]] + 1);

            }

        dp[i] = min;
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};


/*

var coinChange = function(coins, amount) {
  let minNumberOfCoins = new Array(amount + 1).fill(Infinity);
  minNumberOfCoins[0] = 0;

  for (let coin of coins) {
    for (let i = 0; i < minNumberOfCoins.length; i++) {
      if (coin <= i) {
        minNumberOfCoins[i] = Math.min(
          minNumberOfCoins[i],
          minNumberOfCoins[i - coin] + 1
        );
      }
    }
  }


  return minNumberOfCoins[amount] !== Infinity ? minNumberOfCoins[amount] : -1;
};

You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.


DP solution:

def dp[i][j]: min coins to make up j amount using first i types of coins.
电脑截屏


Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1

*/