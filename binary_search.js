var binary_search = function(nums, target) {
    
    let left = 0,
        right = nums.length - 1;
    
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if(nums[mid] === target) {
            return mid;
        }
        else if(nums[mid] > target) {
            // [1,2,3]
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return -1;
};



let findValue = binary_search([1,2,3,4,9], 9);
console.log(findValue);