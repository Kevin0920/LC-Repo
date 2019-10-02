/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums === null || nums.length === 0) {
        return [];
    }

    let map = {},
        findNum;

    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if (val in map) {
            map[val]++;
        } else {
            map[val] = 1;
        }
    }

    for (let key in map) {
        if (map[key] === 1) {
            findNum = parseInt(key);
        }
    }
    return findNum;
};