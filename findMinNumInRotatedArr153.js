/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length === 0) return 0;

    let n = nums.length,
        left = 0,
        right = n - 1;

    if (n < 2) {
        return nums[0];
    }

    if (nums[right] > nums[0]) { // sorted array
        return nums[0];
    }

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid + 1] < nums[mid]) {
            return nums[mid + 1];
        }
        if (nums[mid - 1] > nums[mid]) {
            return nums[mid]; // 这种情况[3,1,2]
        }

        if (nums[mid] > nums[0]) {
            left = mid + 1; // min num 
        } else {
            right = mid - 1;
        }

    }
    // return nums[left];
};


/*
test case;

[3,1,2]
[2,1]

Share
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:

Input: [3,4,5,1,2] 
Output: 1
Example 2:

Input: [4,5,6,7,0,1,2]
Output: 0

*/