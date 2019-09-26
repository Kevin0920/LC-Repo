/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    if (s === '' || s.length === 0) return 0;

    let maxLen = 0;
    let set = new Set();
    let slow = 0,
        fast = 0;

    while (fast < s.length) {
        if (!set.has(s[fast])) {
            set.add(s[fast]);
            // 见到相同的字母，删除原来的位子，然后加上后面重复出现的值：
            // 例如： abcda
            // a 重复， 在 map里，减去 index 0 position a，最后最长的是 bcda
            maxLen = Math.max(maxLen, fast - slow + 1);
            fast++;
        } else {
            set.delete(s[slow]);
            slow++;
        }
    }
    return maxLen;
};

var lengthOfLongestSubstring = function(s) {

    if (s === '' || s.length === 0) return 0;

    let seen = {},
        maxLen = 0,
        start = 0;

    for (let end = 0; end < s.length; end++) {
        let ch = s[end];
        if (ch in seen) {
            start = Math.max(start, seen[ch] + 1);
        }

        seen[ch] = end;
        // 见到相同的字母，删除原来的位子，然后加上后面重复出现的值：
        // 例如： abcda
        // a 重复， 在 map里，减去 index 0 position a，最后最长的是 bcda
        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
};

/*

Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/