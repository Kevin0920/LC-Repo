var nextPermutation = function(nums) {
    if (nums === null || nums.length === 0) return;

    let firstSmall = -1;
    //  1   2   7   4   3   1
    //                  ^
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            firstSmall = i;
            break;
        }
    }

    if (firstSmall === -1) {
        reverse(nums, 0, nums.length - 1);
        return;
    }

    let firstLarge = -1;
    for (let i = nums.length - 1; i > firstSmall; i--) {
        if (nums[i] > nums[firstSmall]) {
            firstLarge = i;
            break;
        }
    }
    swap(nums, firstSmall, firstLarge);
    // 把这两个函数值给翻转完毕之后 => 1   3   7   4   2   1 

    reverse(nums, firstSmall + 1, nums.length - 1);
    // 最后把 3 以后的数字进行翻转

    return nums;
};

const swap = (nums, i, j) => {
    let tmp = nums[i];
    nums[i++] = nums[j];
    nums[j--] = tmp;
}

const reverse = (nums, i, j) => {
    while (i < j) {
        swap(nums, i++, j--);
    }
}
console.log(nextPermutation([1, 2, 7, 4, 3, 1]))
/*
        1   2   7   4   3   1
            ^       
        1   2   7   4   3   1
                        ^
        1   3   7   4   2   1
            ^           ^
        1   3   1   2   4   7           like rotated array 
                ^   ^   ^   ^

*/