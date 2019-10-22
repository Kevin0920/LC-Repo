// Example 1:

// Input: "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: "  hello world!  "
// Output: "world! hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

const reverseStr = s => {
    if (s === '' || s.length === 0) {
        return s;
    }
    let arr = s.split(' ');
    let result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        let val = arr[i];
        if (val.length > 0) { // test for ' ' empty space which has no length
            result.push(val);
        }
    }

    return result.join(' ');
}

console.log(reverseStr("the sky is blue"))
console.log(reverseStr("  hello world!  "))
console.log(reverseStr("a good   example"))