/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1,
        j = num2.length - 1,
        sum = 0,
        carry = 0,
        res = '';
    
    while(i >= 0 || j >= 0) {
        let val1 = i >= 0 ? num1[i] - '0' : 0;
        let val2 = j >= 0 ? num2[j] - '0' : 0;
        
        sum = val1 + val2 + carry;
            
        res = sum % 10 + res;  // 各位
        carry = Math.floor(sum / 10);
        i--;
        j--;
    }
    
    if(carry > 0) {
        res = carry + res;
    }
    
    return res;
};

/*

Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

*/