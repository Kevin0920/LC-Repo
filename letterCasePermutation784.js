/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    if(S === '' || S.length === 0) return [''];
    
    let res = [],
        cur = '';
    dfs(S, res, cur, 0);
    
    return res;
};

const dfs = (s, res, cur, idx) => {
    if(idx === s.length) {
        res.push(cur);
        return;
    }
    
    
    if(!isNaN(s[idx])) {
        dfs(s, res, cur + s[idx], idx + 1);
    }
    else {
        dfs(s, res, cur + s[idx].toUpperCase(), idx + 1);
        dfs(s, res, cur + s[idx].toLowerCase(), idx + 1);
    }

}

// 784. Letter Case Permutation
// Easy

// 1188

// 103

// Add to List

// Share
// Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

// Examples:
// Input: S = "a1b2"
// Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

// Input: S = "3z4"
// Output: ["3z4", "3Z4"]

// Input: S = "12345"
// Output: ["12345"]