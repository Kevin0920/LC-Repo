/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s === '' || s.length === 0) return true;
    
    let s_pointer = 0,
        t_pointer = 0;
    
    while(t_pointer < t.length) {    // loop through all the characters in t string
        if(t.charAt(t_pointer) === s.charAt(s_pointer)) {
            s_pointer++;
            if(s_pointer === s.length) return true; // go through 
        }
        
        t_pointer++;
    }
    
    return false;
};

/*

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
s = "abc", t = "ahbgdc"

Return true.

Example 2:
s = "axc", t = "ahbgdc"

Return false.

*/