/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let i = 0,
        j = s.length - 1;
    
    while(i <= j) {
        if(s.charAt(i) === s.charAt(j)) {
            i++;
            j--;
        }
        else {
            // 左右两边删除一个字母，看是否是valid字符串
            return helper(s, i + 1, j) || helper(s, i, j - 1);
        }
    }
    return true;
};

const helper = (s, i, j) => {
    while(i <= j) {
        if(s.charAt(i) === s.charAt(j)) {
            i++;
            j--;
        }
        else {
            return false;
        }
    }

    return true;
}

/*

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.

*/