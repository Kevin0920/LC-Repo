/**
 * @param {string} path
 * @return {string}
    
    Time Complexity: O(n), Space O(n)
 */
var simplifyPath = function(path) {
    if (path.length <= 1) return path;

    let stack = [];

    let each = path.split('/');
    // console.log(each)

    for (let cur of each) {
        if (cur === '..') {
            stack.pop();
        } else if (cur !== '.' && cur !== '') {
            stack.push('/' + cur);
        }

    }

    if (stack.length === 0) stack.push("/");

    console.log(stack)
    return stack.join('');
};