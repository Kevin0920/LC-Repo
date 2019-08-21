var searchRange = function(nums, target) {
    
    if(nums === null || nums.length === 0) return [-1, -1];
    
    let left = findFirst(nums, target),
        right = findLast(nums, target);
    
    return [left, right];
};

const findFirst = (nums, target) => {
    let left = 0,
        right = nums.length - 1;
    
    while(left + 1 < right) {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) {
            right = mid;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid -1;
        }
    }
    if(nums[left] === target) {
        return left;
    } 
    else if (nums[right] === target) {
        return right;
    }
    else {
        return -1;
    }
}

const findLast = (nums, target) => {
    let left = 0,
        right = nums.length - 1;
    
    while(left + 1 < right) {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) {
            left = mid;
        }
        else if (nums[mid] > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    if(nums[right] === target) {
        return right;
    } 
    else if (nums[left] === target) {
        return left;
    }
    else {
        return -1;
    }
}







console.log(searchRange([5,7,7,8,8,10], 8))

