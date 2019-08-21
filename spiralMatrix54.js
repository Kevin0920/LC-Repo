/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let result = [];

    if (matrix.length === 0) return result;

    let rowBegin = 0,
        rowEnd = matrix.length - 1,
        colBegin = 0,
        colEnd = matrix[0].length - 1;

    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        // 先扫描 第一行  [1,2,3] 然后放入result list
        for (let i = colBegin; i <= colEnd; i++) {
            result.push(matrix[rowBegin][i]);
            console.log('111 ', result)
        }
        rowBegin++;

        // 扫描 从第1行的最后一个值 colEnd 往每一行row 往下走
        for (let i = rowBegin; i <= rowEnd; i++) {
            result.push(matrix[i][colEnd]);
            console.log('222 ', result)
        }
        // subtract 1 column after one loop done all column value in result list 
        colEnd--;

        // 因为我们已经把 1，2，3，6，9的值放入 result array，所以说原来的 matrix 已经改变了，所以我们还是要做这两步的检测
        if (rowBegin <= rowEnd) {
            for (let i = colEnd; i >= colBegin; i--) {
                result.push(matrix[rowEnd][i]);
            }
        }
        rowEnd--;

        if (colBegin <= colEnd) {
            for (let i = rowEnd; i >= rowBegin; i--) {
                result.push(matrix[i][colBegin]);
            }
        }
        colBegin++;
    }

    return result;
};

console.log(spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));

/*


Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]

*/