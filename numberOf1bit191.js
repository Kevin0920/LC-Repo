/**
 * @param {number} n - a positive integer
 * @return {number}
 
 时间复杂度：O(M),M是n中1的个数
 */
var hammingWeight = function(n) {

    let count = 0;

    while (n !== 0) {
        n &= (n - 1);
        count++
    }

    return count;
};