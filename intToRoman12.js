var intToRoman = function(num) {
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
        result = '';
    
        for (let i = 0; i < values.length; i++) {
            while (num >= values[i]) {
                num -= values[i];
                result += numerals[i];
            }   
        }

    return result;
};

console.log(intToRoman(3));


/*
    为什么条件是最大3999。因为题给的数字，没有 4000表达的罗马数字表示， 5000 - 1000 ？ 所以 M 是最大的
    
    罗马数字表达法：  900 = 1000 - 100 , 可是是反向表示：  CM
                            M      c
    values = [1000, 900, 500, 400,....]
    numerals = ['M', 'CM', 'D', 'CD']
    input: 1994
    1994 > ? 1000 => M
    994 > ? 900 => MCM
    94 > ? 90 => MCMXC
    4 > ? 4 => MCMXCIV


    Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: 3
Output: "III"
Example 2:

Input: 4
Output: "IV"
Example 3:

Input: 9
Output: "IX"
Example 4:

Input: 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 5:

Input: 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
