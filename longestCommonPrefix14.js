/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs || strs.length === 0) return '';
    
    let prefix = strs[0];
    
    for(let i = 1; i < strs.length; i++) {
        while(strs[i].indexOf(prefix) !== 0) {
            // if prefix string exists in the second string checking if true, will take a letter off each time when
            // we while loop every time, and then slice one charactor at the time
            prefix = prefix.slice(0, prefix.length - 1);
        }
    }
    
    return prefix;
};

/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/