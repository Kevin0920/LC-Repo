/**
 * @param {string} s
 * @return {boolean}
 使用双指针扫描字符串, 过滤掉非字母和数字字符。
 
 '%%%%%$$$$****aaa***&&&&$$$$' => 'aaa' is the string will 
 */
var isPalindrome = function(str) {

    if (str === "") return true;

    let left = 0,
        right = str.length - 1;

    let set = new Set("abcdefghijlkmnopqrstuvwrxyz0123456789".split(''));

    while (left <= right) {
        let currentLeft = str[left].toLowerCase(),
            currentRight = str[right].toLowerCase();

        // if the string is '&&&&$$$$' no alphanumeric(letter or number), it consider as empty string, need edge case here to not go over the boundary 
        if (left <= right && !set.has(currentLeft)) {
            left++;
            continue;
        }

        if (left <= right && !set.has(currentRight)) {
            right--;
            continue;
        }

        if (left <= right && currentLeft !== currentRight) {
            return false;
        }

        left++;
        right--;

    }
    return true;
};

/*


Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false

*/