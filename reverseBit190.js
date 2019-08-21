/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {

    if (n === 0) return 0;
    let result = 0;

    for (let i = 0; i < 32; i++) {
        result <<= 1;
        if ((n & 1) === 1) result++;
        n >>= 1;
    }


    return result >>> 0;
};

console.log(reverseBits(11111111111111111111111111111101))

/*

思路
这道题是给定一个32位的无符号整型，让你按位翻转， 第一位变成最后一位， 第二位变成倒数第二位。。。

那么思路就是双指针

这个指针可以加引号

n从高位开始逐步左， res从低位（0）开始逐步右移
逐步判断，如果该位是1，就res + 1 , 如果是该位是0， 就res + 0
32位全部遍历完，则遍历结束
关键点解析
可以用任何数字和1进行位运算的结果都取决于该数字最后一位的特性简化操作和提高性能
eg :

n & 1 === 1, 说明n的最后一位是1
n & 1 === 0, 说明n的最后一位是0
对于JS，ES规范在之前很多版本都是没有无符号整形的， 转化为无符号，可以用一个trickn >>> 0

双"指针" 模型

bit 运算

*/