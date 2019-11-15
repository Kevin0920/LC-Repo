/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    if(s === '' || s.length === 0) return s;
    
    
    let stack = [],
        curNum = 0,
        curString = '',
        str = s.length;
    
    for(let i = 0; i < str; i++) {
        let c = s.charAt(i);
        // console.log(c)
        if(parseInt(c) || c === '0') {
            curNum = curNum * 10 + parseInt(c);
        }
        else if (c === '[') {
            stack.push(curString);
            stack.push(curNum);
            console.log(stack)
            curNum = 0;
            curString = '';
        }
        else if (c === ']') {
            let num = stack.pop();
            let char = stack.pop();
            curString = char + curString.repeat(parseInt(num));
        }
        else {
            curString += c;
        }
    }
    
    return curString;
};

/*

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

*/