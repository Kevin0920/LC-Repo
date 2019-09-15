/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

    let map = {};

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (map[c]) {
            map[c] += 1;
        } else {
            map[c] = 1
        }
    }

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (map[c] === 1) {
            return i;
        }
    }
    return -1;

};

/*

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

*/