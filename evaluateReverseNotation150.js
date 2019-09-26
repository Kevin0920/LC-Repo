/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let numStack = [];
    for (let i = 0; i < tokens.length; i++) {
        // stack logic first in last out, 在除法中的逻辑  2 / 1 = 2, ['2', '1', '/'] first pop num is 2, second pop is 1
        let cur = tokens[i];
        if (cur === '+' || cur === '-' || cur === '*' || cur === '/') { // when see the operator do calculation
            let secondPopNum = parseInt(numStack.pop());
            // console.log(secondPopNum)
            let firstPopNum = parseInt(numStack.pop());
            console.log('first ', firstPopNum)
            let tmp;
            if (cur === '+') {
                tmp = firstPopNum + secondPopNum;
            } else if (cur === '-') {
                tmp = firstPopNum - secondPopNum;
            } else if (cur === '/') {
                tmp = firstPopNum / secondPopNum;
                // tmp number can be negative number or 0.5, 需要处理这个问题
                tmp = tmp < 0 ? Math.ceil(tmp) : Math.floor(tmp);
            } else {
                tmp = firstPopNum * secondPopNum;
            }
            numStack.push(tmp);
        } else {
            numStack.push(cur); // 不是operator时候，是数字的时候
        }
        console.log(numStack)
    }
    return numStack.pop();
};
console.log(evalRPN(["2", "1", "/"]))

/*

Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression.

Note:

Division between two integers should truncate toward zero.
The given RPN expression is always valid. That means the expression would always evaluate to a result and there won't be any divide by zero operation.
Example 1:

Input: ["2", "1", "+", "3", "*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: ["4", "13", "5", "/", "+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
Output: 22
Explanation: 
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22

*/