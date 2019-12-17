/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if(digits === null || digits.length === 0) return [];
    
    let n = digits.length;
    for(let i = n - 1; i >= 0; i--) {
        if(digits[i] === 9) {
            digits[i] = 0; 
        }
        else {
            digits[i]++;
            return digits;
        }
  
    }
    digits[0] = 1;  // [9, 9] => [1, 0, 0] change the first element to 1, then push one 0 into the end of array
    digits.push(0);
    
    return digits;
};

/*

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

*/