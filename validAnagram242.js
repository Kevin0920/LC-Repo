/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    let map = {};   // counting in s, all the charater existing how many times
    
    for(let i = 0; i < s.length; i++) {
        const ch = s.charAt(i);
        if(!map[ch]) {
            map[ch] = 0;
        }
        map[ch]++;
    }
    
    for(let i = 0; i < t.length; i++) {
        let ch = t.charAt(i);
        if(map[ch] === undefined) return false; 
        // if in t, there is no match character compare with s string
        map[ch]--;
    }
    // "aacc"
    // "ccac" 
    // if both strings are the same long, but s still has more charactor exists which t has looped checking all the characters. means t has less existing character than s 
    for(let key in map) {   
        if(map[key]) {
            return false;
        }
    }
    
    return true;    
};


/*

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

*/




















