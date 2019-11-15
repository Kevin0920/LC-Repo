/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    let result = [],
        sum = 0,
        count = 0,      // count how many existing in nine box 
        row = M.length,
        col = M[0].length;
    
    for(let i = 0; i < row; i++) {
        result[i] = [];
        for(let j = 0; j < col; j++) {
            sum = M[i][j];
            count = 1;
            if((i - 1) >= 0) {
                sum += M[i - 1][j];     // left
                count++;
                if((j - 1) >= 0) {
                    sum += M[i - 1][j - 1];  // upper left
                    count++;
                }
                if((j + 1) < col) {
                    sum += M[i -1][j + 1]; // down left
                    count++;
                }
            }
            
            if((i + 1) < row) {
                sum += M[i + 1][j];     // right
                count++;
                if((j - 1) >= 0) {
                    sum += M[i + 1][j - 1];     // upper right
                    count++;
                }
                if((j + 1) < col) {
                    sum += M[i + 1][j + 1];     // down right
                    count++;
                }
            }
            
            if((j - 1) >= 0) {
                sum += M[i][j - 1];
                count++;
            }
            if((j + 1) < col) {
                sum += M[i][j + 1];
                count++;
            } 
            result[i][j] = Math.floor(sum / count);
        }
    }
    
    return result;
};


/*

Example 1:
Input:
[[1,1,1],
 [1,0,1],
 [1,1,1]]
Output:
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]
Explanation:
For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
For the point (1,1): floor(8/9) = floor(0.88888889) = 0

*/

















