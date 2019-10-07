/**
 * @param {number[]} A
 * @return {number[]}
 * 
 * In a way, we are going inside out and filling our result from the beginning. Alternativelly, we can go outside in and fill the result in the reverse order:

 */
var sortedSquares = function(A) {
    let n = A.length,
        left = 0,
        right = n - 1,
        result = [];

    for (let i = n - 1; i >= 0; i--) {
        if (Math.abs(A[right]) > Math.abs(A[left])) {
            result[i] = A[right] * A[right];
            right--;
        } else {
            result[i] = (A[left] * A[left]);
            left++;
        }
    }
    return result;
};

/*

977. Squares of a Sorted Array
Easy

510

55

Favorite

Share
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

 

Example 1:

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Example 2:

Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Note:

1 <= A.length <= 10000
-10000 <= A[i] <= 10000
A is sorted in non-decreasing order.

*/