var maxSubArray = function(nums) {
    // edge case 
    if (nums === null || nums.length === 0) {
        return;
    }

    let curSum = 0,
        maxSum = 0;
        curSum = maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        curSum = Math.max(nums[i] , nums[i] + curSum);
        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));



/*
    Input: [-2,1,-3,4,-1,2,1,-5,4],
    Output: 6
    Explanation: [4,-1,2,1] has the largest sum = 6.

*/