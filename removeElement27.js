var removeElement = function(nums, val) {
    if (nums === null || nums.length === 0) {
        return 0;
    }

    /* 
     3, 2, 2, 3
     c
        i
    当前的index值不等于val的时候，把之前target val在count上的值给更新覆盖掉
    
    */

    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[count++] = nums[i];
        }
    }
    return count;
    
};

nums = [3,2,2,3], val = 3,
console.log(removeElement([3,2,2,3], 3))