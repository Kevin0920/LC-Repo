/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums === null) {
        return -1;
    }
    let start = 0,
        end = nums.length - 1,
        mid;

        while (start <= end) {
            mid = start + Math.floor((end - start) / 2);
            if (nums[mid] === target) {
                return mid;
            }
            else if (nums[mid] > target) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        return start;
};


console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 0))
/* 


mid = (start + end) / 2  
start + 1 < end 

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0

*/