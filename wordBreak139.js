/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if (!s && !wordDict) return true;
    if (!s || !wordDict) return false;

    const dict = new Set(wordDict);
    for (let str in wordDict) {
        dict.add(str);
    }

    let dp = new Array(s.length + 1);
    dp[0] = true;

    // { abc, de, fg  }
    // a b c d e f g
    // abcde = i 
    // de = j
    // get: 'abc' and 'de' i - j = 'abc' s.subtring will cut this off then result 'abc'
    for (let i = 1; i <= s.length; i++) {
        for (let j = i; j > 0; j--) {
            let subStr = s.substring(i - j, i);
            if (dict.has(subStr)) {
                if (dp[i - j] === true) {
                    dp[i] = true;
                    break;
                }
            }
        }
    }
    return Boolean(dp[s.length]);
};

/*

Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false

*/