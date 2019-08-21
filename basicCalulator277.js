/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {

};


/*

            0 + 0 + 3 + 2 * 2 * 2   -   6 / 2 / 3
first initial:
        pre 0   0   3   2 => 4  4 => 8  8   -6 => -3
        cur 0   3   2   2       2      -6   2   3
prev sign "+"  "+" "+"  "*"     "*"    "/"  "/" 3
cur sign  "+"   "+" "*"  "*"    "-"    "/"  "/"
    result 0    0   3   3       3       11  11

*/