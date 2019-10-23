/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [],
        len = nums.length;
    nums = nums.sort((a, b) => a - b);


    for (let i = 0; i < len - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break;

        if (nums[i] + nums[len - 1] + nums[len - 1] < 0) continue;

        let left = i + 1,
            right = len - 1;

        while (left < right) { //相互交叉
            let value = nums[i] + nums[left] + nums[right];
            if (value === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                // if there are both nums[left] and nums[right] interating and find duplicate values, then keep searching match pairs
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }

                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }

            } else if (value < 0) {
                left++;
            } else {
                right--;
            }
        }

    }
    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 2, 3, 4]));
console.log(threeSum([-100, 1, 2, 3, 4, 8, 9]));
/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

思路：
    sort array => [-4, -1, -1, 0, 1, 2] 
    从最倒数第2位开始，因为在最极端的时候，最后3位有可能是，等于0的一个solution set;
    让 i 指针到倒一和倒二是没有意义的，因为 result = nums[i] + nums[left] + nums[right] => nums[i] + nums[nums.leng - 2] + nums[nums.leng - 1]
    最终的循环

Case 1:

    [0, 1, 2, 3, 4,.....]
    前3位相加，大于0
    0 + 1 + 2 = 3  > 0  这个case不成立

case 2:
    
    [-100, 1, 2, 3, 4,..., 8, 9]
    -100 + 9 + 9 = -89 < 0
    负数太小了，怎么样相加都是小于0很多。


A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/