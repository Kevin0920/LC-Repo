/**
 * @param {string} s
 * @return {string}
 */



var longestPalindrome = function(s) {

    // if(s === '' || s.length <= 1) return s;

    let res = '';

    for (let i = 0; i < s.length; i++) {
        let conditionPalLen1 = getLongestPalin(s, i, i);
        let conditionPalLen2 = getLongestPalin(s, i, i + 1);

        if (conditionPalLen1.length > res.length) {
            res = conditionPalLen1;
            // console.log(res)
        }

        if (conditionPalLen2.length > res.length) {
            res = conditionPalLen2;
        }

    }

    return res;
};

const getLongestPalin = (s, left, right) => {
    console.log(s)
    while (left >= 0 && right < s.length && s[left] === s[right]) { // 'bab'
        left--;
        right++;
    }
    left++;
    right--;

    return s.substring(left, right + 1);
}


console.log(longestPalindrome('babad'))