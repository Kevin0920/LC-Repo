/**
 * @param {number} n
 * @param {number} k
 * @return {string}
    先确认，这几个数组的区间    k = 3,  k = k - 1 = 2
     "123"  0/2 = 0 余数  0/2 = 0
0    "132"  1/2 = 0      1/2 = 1

     "213"  2/2 = 1      2/2 = 0
1    "231"  3/2 = 1      3/2 = 1

     "312"  4/2 = 2      4/2 = 0
2    "321"  5/2 = 2      5/2 = 1
 
 */
var getPermutation = function(n, k) {
    let res = []
    let f = [1]
    let s = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    for (let i = 1; i < n; i++) {
        f[i] = factorial(i)
    }
    --k
    for (let i = n; i >= 1; i--) {
        let j = Math.floor(k / f[i - 1])
        k %= f[i - 1]
        res += s[j]
        s.splice(j, 1)
    }
    return res
};

function factorial(n, total = 1) {
    if (n === 1) return total;
    return factorial(n - 1, n * total);
}