var generateParenthesis = function(n) {
  
    if (n === 0) return [];
    // result to store all well-formed parentheses
    let result = [];
    // using recursion to determine left and right parentheses amount with temp storing well-formed parentheses and push them into result 

    helper(n, n, '', result);
    return result;
};

const helper = (left, right, item, result) => {
    // if right parentheses remainder greater than left, means not well-formed parentheses as '(())))(
    if (right < left) {
        return;
    }

    // remainder for left and right parentheses === 0 mean pairing done, then we can push well-formed parentheses into result 
    if (left === 0 && right === 0) {
        result.push(item);
        console.log(result);
    }

    // if there is left parentheses, call hepler function
    if (left > 0) {
        // here is how many left parentheses remain doing decrement, right parentheses keep the same amount
        helper(left - 1, right, item + '(', result);
    }
    if (right > 0) {
        // here is how many right parentheses remain doing decrement, left parentheses keep the same amount
        helper(left, right - 1, item + ')', result);
    }
}

console.log(generateParenthesis(3));

/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

思路：

正常时候，在用括号时候都是先写，正左边括号再右边的。

用递归

                         (
                ((                ()
            
            (((    (()            ()(
    ((()))     (()(   (())    ()()  ()((
               
              (()()   (())(   ()()()  ()(())
               
              (()())  (())()
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

*/