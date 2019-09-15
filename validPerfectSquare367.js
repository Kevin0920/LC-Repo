/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    // binary search 

    let left = 1,
        right = num;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let targetVal = mid * mid;
        if (targetVal === num) {
            return true;
        } else if (targetVal < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
};

/*
思路：
用二分搜索，mid的值能等同，它自己本身相乘数等于输入的数字，就是正确的平方数

Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Output: true
Example 2:

Input: 14
Output: false

*/