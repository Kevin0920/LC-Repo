/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    let result = [];
    // sort arrays by the first interval 
    intervals.sort((a, b) => a[0] - b[0]);

    // loop from 0 to n
    for (let i = 0; i < intervals.length; i++) {
        // temp val for later comparing with 
        let preNum = result[result.length - 1];
        // does not overlap with preNum. 
        if (i === 0 || intervals[i][0] > preNum[1]) {
            result.push(intervals[i]);
        } else {
            // overlap condition 
            preNum[1] = Math.max(preNum[1], intervals[i][1]);
        }
    }
    return result;
};

console.log(merge([
    [17, 19],
    [1, 3],
    [2, 6],
    [5, 10],
    [15, 18],
]));
/*

思路
always trying to get the last interval from the previous merged array
1. sort by start time
2. loop 
3. if i === 0 beginning put in result
4. get the last one in result 
5. if its beginning or overlaps we want to put the interval in the result. merge current i 
6 return result list  


Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[5,10],[15,18],[17,19]]
Output: [[1,10],[15,19]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

思路：例子如下
[1,3]   [2,6] merge => [1,6]
[1,6]   [5,10] merge => [1,10]
[1,10],[15,18],[17,19]
[15,18]     [17,19] merge => [15,19]
output [[1,10],[15,19]]

time complexity: o(n^2) 有N个intervals 每个intervals都要跟后面的intervals array 做merge 所以要遍历 0(n^2)
space complexity: o(n) everytime helper function creates an extra list for temp result

Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.


*/