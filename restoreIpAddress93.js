/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if (s === '' || s.length > 12) return []; // 最长的可能就是12，题目给的例子只是个例
    let result = [];

    helper(result, s, '', 0);
    return result;
};

const helper = (result, s, cur, field) => {
    // field: 0, 1, 2, 3, 4 means all done      here is IP may have 4 different parts

    if (field === 4 && s.length === 0) {
        result.push(cur.substring(1)); // remove prefix '.'
    } else if (field === 4 || s.length === 0) {
        return; // not valid combination
    } else {
        // if just one number, default cur is empty add '.'
        helper(result, s.substring(1), cur + '.' + s.substring(0, 1), field + 1);
        if (s.charAt(0) !== '0' && s.length > 1) {
            helper(result, s.substring(2), cur + '.' + s.substring(0, 2), field + 1);
            if (s.length > 2 && s.substring(0, 3) <= 255) {
                helper(result, s.substring(3), cur + '.' + s.substring(0, 3), field + 1);
            }
        }
    }
}

/*

Given a string containing only digits, restore it by returning all possible valid IP address combinations.

Example:

Input: "25525511135"
Output: ["255.255.11.135", "255.255.111.35"]

*/