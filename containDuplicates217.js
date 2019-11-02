/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(nums === null || nums.length === 0) return false;
    
    let map = {};
    
    for(let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if(map[val]) {
            return true;
        }
        else {
            map[val] = 1;
        }
    }
    
    return false;
};

/**
 * 
Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
 */