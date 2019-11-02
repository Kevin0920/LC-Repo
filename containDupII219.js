/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
    if(nums === null || nums.length === 0) return false;
    
    let map = {}
    
    for(let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if(map[val] !== undefined && i - map[val] <= k) {  // i current duplicate element position substract value from map key
            return true;
        }
        else {
            map[val] = i;
        }
        
        console.log(map)
    }
    
    
    return false;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3));