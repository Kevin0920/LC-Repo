/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

    if (x <= 1) {
        return x;
    }

    let left = 1,
        right = x / 2;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (mid > x / mid) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }

    }
    //  Explanation: The square root of 8 is 2.82842..., and since 
    // the decimal part is truncated, 2 is returned.
    // 所以这种情况是要
    return left - 1;
};