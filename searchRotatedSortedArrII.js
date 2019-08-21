/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 * 
 * o(logn) BEST          WORST o(n)
 */
var search = function(nums, target) {
    if (nums === null || nums.length === 0) return false;
    let left = 0,
        right = nums.length - 1;

    //   4 5 6  8  13 12 11                 
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (target === nums[mid]) {
            return true;
        }
        // worst case [1,1,1,3,1,1] target = 1, mid could be 1 also
        if (nums[left] === nums[mid] && nums[right] === nums[mid]) {
            left++;
            right--;
        } else if (nums[left] <= nums[mid]) {
            if (target < nums[mid] && target >= nums[left]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return false;
};