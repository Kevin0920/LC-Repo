/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums === null || nums.length === 0) return 0;

    let maxSum = nums[0],
        curSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > curSum + nums[i]) { // 比如前两轮，其中有负数的话，num[i] 有可能会大于 curVal
            curSum = nums[i];
        } else {
            curSum += nums[i]; // get cur max sum;
        }
        if (curSum > maxSum) {
            maxSum = curSum;
        }
    }

    return maxSum;
};

var maxSubArray = function(nums) {
    if (nums === null || nums.length === 0) return 0;

    let max = nums[0],
        curMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        curMax = Math.max(nums[i], curMax + nums[i]);
        max = Math.max(max, curMax);
    }

    return max;
};

// Divide and Conquar

var maxSubArray = function(nums) {
    var maxSubArr = function(l, r) {
        if (l === r) {
            return [nums[l], nums[l], nums[l], nums[l]];
        }
        let mid = parseInt((l + r) / 2);
        let [max1, lmax1, rmax1, sum1] = maxSubArr(l, mid);
        let [max2, lmax2, rmax2, sum2] = maxSubArr(mid + 1, r);
        return [Math.max(Math.max(max1, max2), rmax1 + lmax2),
            Math.max(sum1 + lmax2, lmax1),
            Math.max(rmax1 + sum2, rmax2),
            sum1 + sum2
        ];
    }
    let [maxSum] = maxSubArr(0, nums.length - 1);
    return maxSum;
};

/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

*/