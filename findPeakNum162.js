/**
 * @param {number[]} nums
 * @return {number}
 */
// linear search o(n)

var findPeakElement = function(nums) {
    let len = nums.length;
    if (len === 1) return 0; // no peak num found

    for (let i = 1; i < len - 1; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i;
        }
    }
    if (nums[0] > nums[1]) {
        return 0;
    }

    if (nums[len - 1] > nums[len - 2]) return len - 1;

    return 0;
};

// Binaray Search 

var findPeakElement = function(nums) {
    let left = 0,
        right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

/*

nums = [1, 2, 3, 1]

left = 0, right = 3, mid = 1 取整数. nums[1] < nums[2];
left = mid + 1 = 1 + 1 = 2, right = 3 不变, mid = 2 + 3 = 5. mid / 2 = 2 取整数. nums[2] > nums[3];
left = 2, right 变成 mid = 2, 这时候 left 和 right相等. 直接return left. left index = 2;

*/

/*
Time complexity : O\big(log_2(n)\big)O(log 
2
​	
 (n)). We reduce the search space in half at every step. Thus, the total search space will be consumed in log_2(n). log2(n) steps. Here, nn refers to the size of numsnums array.

Space complexity : O(1)O(1). Constant extra space is used.
*/

/*

A peak element is an element that is greater than its neighbors.

Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that nums[-1] = nums[n] = -∞.

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 1 or 5 
Explanation: Your function can return either index number 1 where the peak element is 2, 
             or index number 5 where the peak element is 6.

*/