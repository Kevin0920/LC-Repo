const moveZero = nums => {
    let count = 0;

    /* 
     [0,1,0,3,12]
      c
        i
    */

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[count] = nums[i];
            count++;
        }
        console.log(nums, 'count ' + count, 'nums[i] ' + nums[i])
    }

    for (let i = count; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
}



// console.log(moveZero([1,0,0,3,12]));
console.log(moveZero([0,1,0,3,12]));