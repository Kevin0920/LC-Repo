/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    if (s === '' || s.length === 0) return true;

    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }


    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(map[s[i]]);
        } else if (stack.length === 0 || s[i] !== stack.pop()) {
            return false;
        }
        console.log(stack)
    }

    return stack.length === 0;
};

const isValid = s => {
    //     建一个栈，遇到左边的括号就入栈
    let inStack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            inStack.push(s[i])
        } else {
            let temp = inStack.pop()
            if (temp === '(' && s[i] !== ')') {
                return false
            } else if (temp === '[' && s[i] !== ']') {
                return false
            } else if (temp === '{' && s[i] !== '}') {
                return false
            } else if (!temp) {
                //                    这个判断不要漏了，第一个开始的可能就是一个右边括号，所以有可能弹出的是空
                return false
            }
        }
    }
    return inStack.length === 0 ? true : false
}


console.log(isValid('()'));

/*

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true

*/