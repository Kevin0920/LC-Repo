var findDuplicate = function(nums) {
    if (nums === null || nums.length === 0) return 0;

    nums = nums.sort((a, b) => a - b);
    let result = []
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            // return nums[i];
            result.push(nums[i])
        } else {
            continue
        }
    }
    // return -1;
    return result
};

console.log(findDuplicate([1, 3, 4, 2, 2]));

/*

Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Example 1:

Input: [1,3,4,2,2]
Output: 2
Example 2:

Input: [3,1,3,4,2]
Output: 3
Note:

You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.

*/