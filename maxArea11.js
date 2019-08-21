const maxArea = height => {

    let left = 0,
        right = height.length - 1;
        result = 0;

    while (left < right) {
        
        // calculate water area, keep the lowest height
        let water = Math.min(height[left], height[right]) * (right - left);
        
        if (water > result) {
            result = water;
        }

        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }
    }

    return result;
}


console.log(maxArea([1,3,2,4]));
// console.log(maxArea([1,8,6,2,5,4,8,3,7]));