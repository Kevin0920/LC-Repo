/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if (s === '' || s.length > 12) return [];

    let result = [],
        cur = '';

    helper(s, result, cur, 0);
    return result;
};

const helper = (s, result, cur, field) => {

    if (s.length === 0 && field === 4) {
        result.push(cur.substring(1)); // remove the '.' from the beginning
    } else if (s.length === 0 || field === 4) {
        return;
    } else {
        // '1','2','3','4'
        helper(s.substring(1), result, cur + '.' + s.substring(0, 1), field + 1);

        if (s.length > 1 && s.charAt(0) !== '0') {
            helper(s.substring(2), result, cur + '.' + s.substring(0, 2), field + 1);
            console.log(cur)
            if (s.length > 2 && s.substring(0, 3) <= 255) {
                helper(s.substring(3), result, cur + '.' + s.substring(0, 3), field + 1);
            }
        }

    }
}


/**

思路：
IP 地址分为 4个部分 以string形态，所表示
1.  有可能显示为    ['1', '2', '3', '4']
2. sub string  不会大于 255，题目给出例子
3. 是用  '.' 分开string

Given a string containing only digits, restore it by returning all possible valid IP address combinations.

Example:

Input: "25525511135"
Output: ["255.255.11.135", "255.255.111.35"]

 */