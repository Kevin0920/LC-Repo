/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if(!a && !b) return '0';
    if(!a) return b;
    if(!b) return a;
    
    let i = a.length - 1;
    let j = b.length - 1;
    let sum = 0;
    let carry = 0;
    let res = '';
    
    while(i >= 0 || j >= 0) {
        let val1 = i >= 0 ?  parseInt(a[i--]) : 0;
        let val2 = j >= 0 ? parseInt(b[j--]) : 0;
        
        sum = val1 + val2 + carry;
        
        res = sum % 2 + res;
        
        carry = sum >= 2 ? 1 : 0;
    }
    
    if(carry > 0) {
        res = carry + res;
    }
    
    
    return res;
};


/*
二进制题目， 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

*/























