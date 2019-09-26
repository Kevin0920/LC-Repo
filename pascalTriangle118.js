/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) return [];

    if (numRows === 1) return [
        [1]
    ];

    let result = [
        [1],
        [1, 1]
    ];

    if (numRows.length === 2) return result;

    while (result.length !== numRows) {
        let tmpArr = [];
        for (let i = 0; i < result.length; i++) {
            if (i === 0) {
                tmpArr.push(1); // store the first left side 1
            } else if (i === result.length - 1) { // i 是移动每个row的指针, [len - 1]表示上一行
                tmpArr.push(result[result.length - 1][i] + result[result.length - 1][i - 1]);
                tmpArr.push(1);
            } else {
                tmpArr.push(result[result.length - 1][i] + result[result.length - 1][i - 1]);
            }
        }
        result.push(tmpArr);
    }
    return result;
};

console.log(generate(4));

/**
 * 
 * 
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
 */