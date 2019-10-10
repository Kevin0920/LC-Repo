/**
 * @param {string} s
 * @return {string}
 * 思路解析：https://medium.com/@bhprtk/longest-palindromic-substring-a8190fab03ff
 * 
 *  O(n²) time complexity and O(n) space complexity.
 */



var longestPalindrome = function(s) {
    if (!s || s.length <= 1) return s;

    let result = '';

    for (let i = 0; i < s.length; i++) {
        let condition1Pal = expand(s, i, i);
        let condition2Pal = expand(s, i, i + 1); // 'naan' like two 'aa' in the center as mirror

        if (condition1Pal.length > result.length) {
            result = condition1Pal;
        }

        if (condition2Pal.length > result.length) {
            result = condition2Pal;
        }
    }

    return result;
};


const expand = (s, start, end) => {
    while (start >= 0 && end < s.length && s[start] === s[end]) { // from center to expanding check left and right side 
        start--;
        end++;
    }

    return s.substring(start + 1, end);
}



console.log(longestPalindrome('babad'))