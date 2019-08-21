var multiply = function(num1, num2) {
    if (num1 === null || num2 === null || num1.length === 0 || num2.length === 0) return '0';

    let m = num1.length,
        n = num2.length;

    let result = new Array(m + n).fill(0);
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let mul = parseInt(num1.charAt(i)) * parseInt(num2.charAt(j));

            let postLow = i + j + 1,
                postHight = i + j;
            // solving carry on 
            mul += result[postLow];
            // in case, 13 / 10 => we take 3 
            result[postLow] = mul % 10; // 个位数
            // in case, 13 / 10 => we take 1 if there is carry on as 1, 1 + 1 = 2
            result[postHight] += parseInt(mul / 10); // 十位数
        }
    }

    let resultStr = '';
    for (let res of result) {
        // in case, [0, 0, 3, 5], if there is leading zero, we ignore until find none zero num concate to the result string

        if (!(resultStr.length === 0 && res === 0)) {
            resultStr += res;
        }
    }

    return resultStr.length === 0 ? '0' : resultStr;

};
console.log(multiply('123', '456'));


/*
    index 1             1   2   3           index i
    index 0                 4   5           index j

                            1   5
                        1   0
                    0   5        
                        1   2
                    0   8
                0   4
indices[1, 2]                               indices[i + j, i + j + 1]
index          [0, 1, 2, 3, 4]

*/