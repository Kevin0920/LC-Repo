const happyNumber = n => {
    if (n === null) return false;

    let val = n,
        map = {};

    while (!map[val]) {
        if (val === 1) {
            return true;
        }
        map[val] = true;

        let sNum = val + '';
        let numArr = sNum.split('');
        let sum = 0;
        // console.log(numArr);
        for (let i = 0; i < numArr.length; i++) {
            let ele = parseInt(numArr[i]);
            sum += Math.pow(ele, 2); 
        }
        // console.log(sum);
        val = sum;
    }

    // console.log(map);
    return false;
}


console.log(happyNumber(19));
console.log(happyNumber(200));

/*

Input: 19
Output: true
Explanation: 
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

*/