/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if (nums === null || nums.length === 0) return [];

    nums = nums.sort((a, b) => a - b);
    // console.log(nums)
    let n = nums.length,
        result = [];

    for (let i = 0; i < n - 3; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            let left = j + 1,
                right = n - 1;
            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    console.log(result)

                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
};

/**
思路：
跟 3sum 是同一个思路
一步步去重复，利用遍历找出，定好4位数的位子，在 while loop中先去除重复的数字 在移动left,right 指针
 Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]


 */