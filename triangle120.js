/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    // bottom-up
    let n = triangle.length;
    // column 
    let dp = triangle[n - 1];
    for (let i = n - 2; i > -1; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
        }
    }
    return dp[0];
};



/*

Bottom-up approach:

steps:

Define array dp[] = last(bottom) level of triangle
start from the last but one level to the top level (i=triangle.length-2)
for each level i:
for each element j in that level:
find the minimum of the adjacent numbers on the row below (dp[j], dp[j+1])
sum it (minimum val) with the current element at j in triangle[i]
replace the value at j position in dp[] i.e. dp[j]
by doing this iteratively till top we are actually elemenating/ ignoring 1 last element in dp[] in consideration everytime we go to one level up

in the last iteration we will only have 1 element to consider, which will be on the first position

and we return dp[0]

*/