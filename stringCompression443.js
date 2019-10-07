/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    if (chars.length == 0 || chars.length == 1) {
        return chars.length;
    }
    let count = 1;
    let index = 0;
    let current = chars[0];
    for (let i = 1; i < chars.length; i++) {
        if (chars[i] != current) {
            chars[index] = current;
            index++;
            if (count > 1) {
                let temp = count.toString();
                console.log(temp)
                for (let ch of temp) {
                    chars[index] = ch;
                    // console.log(chars)
                    index++;
                }
            }
            count = 1;
            current = chars[i];
        } else {
            count++;
        }
    }
    chars[index] = current;
    index++;
    if (count > 1) {
        for (let ch of count.toString()) {
            chars[index] = ch;
            index++;
        }
    }
    return index;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]))
    /*


    Given an array of characters, compress it in-place.

    The length after compression must always be smaller than or equal to the original array.

    Every element of the array should be a character (not int) of length 1.

    After you are done modifying the input array in-place, return the new length of the array.

     
    Follow up:
    Could you solve it using only O(1) extra space?

     
    Example 1:

    Input:
    ["a","a","b","b","c","c","c"]

    Output:
    Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

    Explanation:
    "aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".

    */