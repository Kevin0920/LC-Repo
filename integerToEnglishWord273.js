/**
 * @param {number} num
 * @return {string}
 
 123, 456, 789 => 789 -> 以千位作为思路开始，因为英文发音也是以千位，为基础
 
 1.先把数字以3个为一组，分成若干组
 2.在每个小组里单独处理的三位数
 1） 个位数 （0，。。。19）
 2）一般两位数 （20-99）
 3）三位数  （百位上的数 + 后面两个）
 
    345 => 3 + 'Hundred' + 4 + 5
    10..12, 13...19
    0->9
 */

const belowTwenty = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const TENS = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const THOUSANDS = ["", "Thousand", "Million", "Billion"];

var numberToWords = function(num) {
    if (num === 0) {
        return 'Zero';
    }
    let idx = 0;
    let result = '';

    while (num > 0) {
        if (num % 1000 != 0) { // 取模 会有余数， 比如345，并没有千位因为已经取模
            result = helper(num % 1000) + THOUSANDS[idx] + ' ' + result; // 一开始thousand对应的index是空的， 会直接显示345，到了看012,345 , 012看到了1，在THOUSANDS是index 1的位子，就有thousand这位。
        }
        num /= 1000;
        num = Math.trunc(num);
        idx++;
    }
    return result.trim();
};
const helper = num => {
    if (num === 0)
        return '';
    else if (num < 20)
        return belowTwenty[num] + " ";
    else if (num < 100)
        return TENS[Math.trunc(num / 10)] + " " + helper(num % 10);
    else
        return belowTwenty[Math.trunc(num / 100)] + " Hundred " + helper(num % 100);
}