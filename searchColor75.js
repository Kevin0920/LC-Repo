const search = (nums) => {
    // edge case 
    if (nums === null || nums.length === 0) {
        return;
    }

    let i = 0,
        j = 0,
        k = nums.length - 1;
    
    while (j <= k) {
        if (nums[j] === 'a') {
            swap(nums, i++, j++);
        }
        else if (nums[j] === 'b') {
            j++;
        }
        else {
            swap(nums, j, k--);
        }
    }
    return nums;
}

const swap = (nums, i, j) =>{
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    return temp;
}

console.log(search(['a', 'a', 'c', 'b', 'c', 'b', 'c']));
console.log(search(['a', 'c', 'b', 'c', 'b', 'c', 'a']));


/*
    Initialization:
    i = 0; all letters to the left-hand side of i are all 'a's
    j = 0; (is the current index), all letters in (i, j) are all 'b's
    k = len - 1; all letters to the right-hand side of k are all 'c's
    unknow area is [j......k]

    idx
            j       
    i                           k    
        a   a   c   b   c   b   c

    [0, i]: a
    [i, j]: b
    [j, k]: unchecked area
    [k, len - 1]: c

*/