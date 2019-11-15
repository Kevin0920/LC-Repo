function check(M) {
    var result = [];
    var sum = 0,
        count = 0;
    for (var i=0; i<M.length; i++) {
        result[i] = [];
        for (var j=0; j<M[i].length; j++) {
            sum = M[i][j];
            count = 1;
            if ( (i-1) >= 0 ) {
                sum += M[i-1][j];//左
                count++;
                if ( (j-1) >= 0 ) {
                    sum += M[i-1][j-1];//左上角
                    count++;
                }
                if ( (j+1) < M[i].length ) {
                    sum += M[i-1][j+1];//左下角
                    count++;
                }
            }
            if ( (i+1) < M.length ) {
                sum += M[i+1][j];//右
                count++;
                if ( (j-1) >= 0) {
                    sum += M[i+1][j-1];//右上角
                    count++;
                }
                if ( (j+1) < M[i].length ) {
                    sum += M[i+1][j+1];//右下角
                    count++;
                }
            }
            if ( (j-1) >= 0 ) {
                sum += M[i][j-1];//上
                count++;
            }
            if ( (j+1) < M[i].length ) {
                sum += M[i][j+1];//下
                count++;
            }
            result[i][j] = Math.floor(sum / count);
        }
    }
    return result;
}

// check([
//     [1, 4, ],
//     [7, 10]
// ]);

console.log(check([
    [1, 4, 6, 8],
    [7, 10, 9, 2],
    [11, 1, 3, 9]
]));