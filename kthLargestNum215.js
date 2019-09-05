/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
    if (nums === null || nums.length === 0 || k <= 0) return 0;

    return quickSelect(nums, 0, nums.length - 1, k);
};

const quickSelect = (nums, lo, hi, k) => {
    // use quick sort's idea
    // put nums that are <= pivot to the left
    // put nums that are  > pivot to the right
    for (var i = lo, j = lo; j < hi; j++) {
        if (nums[j] <= nums[hi]) {
            swap(nums, i++, j);
        }
    }
    swap(nums, i, j);

    // count the nums that are >= pivot
    const m = hi - i + 1;
    // pivot is the one!
    if (m === k) return nums[i];
    // pivot is too small, so it must be on the right
    if (m > k) return quickSelect(nums, i + 1, hi, k);
    // pivot is too big, so it must be on the left
    return quickSelect(nums, lo, i - 1, k - m);
};

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

/*

Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4

*/