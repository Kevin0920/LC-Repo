/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // s = "PAYPALISHIRING" 只有一行的话就是输出 一整条的string
    // numRows >= s.length:   
    // A
    // P
    // p
    //所以没有zigzag模式，直接输出 "APP" 
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    // 对应 numRows 有几个 create 这个 array with string 
    let zigzag = new Array(numRows).fill("");
        console.log(zigzag);
        row = 0,
        step = 1;

    for (let i = 0; i < s.length; i++) {
        zigzag[row] += s[i];
        console.log(typeof(zigzag));
        // undefined 的时候，有可能会有空格
        if (zigzag[row] === undefined) {
            zigzag[row] = "";
        }
        if (row === 0) {
            step = 1;
        }
        else if (row === numRows - 1){
            // 从最底层的 numRows - 1 往上走
            step = -1
        }
        // row index iterate one row, then going to the next row 
        row += step;
    }
    return zigzag.join('');
};

console.log(convert("PAYPALISHIRING", 3));

/*

    // s = "PAYPALISHIRING"
    // interation 1 "P", row[0]
                            +1
    // interation 2 "A", row[1]
                            +1
    // interation 3 "Y", row[2]
                            11
    // interation 4 "P", row[1]
                            -1
    // interation 5 "A", row[0]
                            +1
    // interation 6 "L", row[1]
    // interation 7 "I", row[2]
    // interation 8 "S", row[1]
    // interation 9 "H", row[0]

    总结的是    row === 0, step = 1;  每次  row index step 都要加一
               row = numRows - 1； step = -1;  numRows == 3 - 1 = numRows[2] 就到了 row的最后一行
               row += step

Input: s = "PAYPALISHIRING", numRows = 4
    Output: "PINALSIGYAHRPI"
    Explanation:

    P   A   H   N
    A P L S I I G
    Y   I   R

*/