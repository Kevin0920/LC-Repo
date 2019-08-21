/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    let left = 0,
        right = numbers.length - 1,
        result = [];

    while (left <= right) {
        let sum = numbers[left] + numbers[right];
        if (sum === target) {
            result.push(left + 1);
            result.push(right + 1);
            return result;
        }
        if (sum < target) {
            left++;
        }
        else {
            right--;
        }
    }
};


console.log(twoSum([2,7,11,15], 9));

/*

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.


*/