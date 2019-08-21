const sumClosest = (nums, target) => {

    nums.sort((a, b) => a - b);

    // 最好的就是第一位加第二位再加最后一位 。 这样可以有效的向中间去缩进，寻找那个target值
    // result > target: right val needs to go back to search val
    // result < target: left val needs to go forward to search val 
    let result = Infinity;              
                                                            //  upper bound    
    // upper bound 最高能往左边缩进的是: nums.length - 2 => [-4, -1, 1, 2]
    for (let i = 0; i < nums.length - 2; i++) {
        // 如果有重复的值，就是当前的值对比之前的值。如果是重复的值。继续寻找
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            
            // current val + nums[left] + nums[right]
            let val = nums[i] + nums[left] + nums[right];
            if (Math.abs(val - target) < Math.abs(result - target)) {
                result = val;
            }
            if (val === target) {
                return target;
            }
            else if (val < target) {
                left++;
            }
            else {
                right--;
            }
        }
    }
    
  return result;
}






console.log(sumClosest([-1, 2, 1, -4], 1));

/*
Given array nums = [-1, 2, 1, -4], and target = 1.


先做排序，更好的找到到 target值。在用指针的时候才能更快速的找值。


The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

*/