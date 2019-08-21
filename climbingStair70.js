/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //  func(n) = func(n - 1) + func(n - 2);

    // first step only has one possible result to reach the top 
    if (n === 1) return 1;
    if (n === 2) return 2;

    let prev = 1,
        current = 2;
    // start from step 3 to calculate how many possible outcomes will be 
    for (let i = 3; i <= n; i++) {
        current = current + prev; // like dp function: func(n) = func(n - 1) + func(n - 2); 
        prev = current - prev; // to get new prev value, using the new update/old current val to substract the prev value
    }
    return current;
};