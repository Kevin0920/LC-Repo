/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums === null || nums.length === 0) return 0;

    let map = {};

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];
        if (map[key]) {
            map[key]++;
        } else {
            map[key] = 1;
        }
    }

    // console.log(map)

    for (let key in map) {
        if (map[key] === 1) {
            return key;
        }
    }
    return;
};