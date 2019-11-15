/**
 * @param {number[]} nums
 * @return {number[]}
 *  最高效做法
 */
var findDuplicates = function(nums) {
    let result = [];
    if(nums === null || nums.length === 0) return result;
    
    for(let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if(nums[index] < 0) {
            result.push(Math.abs(index + 1));
        }
        nums[index] = -nums[index]; // if there is dupliate nums in the array, will match the negative index postion
    }
    
    return result;
};


// var findDuplicates = function(nums) {
//     let result = [];
//     if(nums === null || nums.length === 0) return result;
    
//     let map = {};
    
//     for(let i = 0; i < nums.length; i++) {
//         let val = nums[i];
//         if(map[val] !== undefined) {
//             map[val]++;
//         }
//         else {
//             map[val] = 1;
//         }
//     }
    
//     for(let key in map) {
//         if(map[key] > 1) {
//             result.push(parseInt(key));
//         }
//     }
    
//     return result;
// };

/**

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]

 */