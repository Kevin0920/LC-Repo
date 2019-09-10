let palPerm = (s) => {
    //if even: there must be two of every char
    //if odd: there must be only one unique char

    //use hash table to store letters
    //if we see the same letter again, delete from hash
    //check hash at the end: odd - 1 key left, even - no keys left
    //skip spaces

    var hash = {};
    for (var i = 0; i < s.length; i++) {
        let c = s[i];
        if (s[i] === ' ') {
            continue;
        }
        if (!hash[c]) {
            hash[c] = 1;
        } else {
            hash[c]++;
        }
        // console.log(hash);
    }
    var oddCount = 0;
    for (key in hash) {
        // console.log(hash[key])
        if (hash[key] % 2 === 1) {
            oddCount++;
        }
        if (oddCount > 1) {
            return false
        }
        console.log(oddCount)
    }
    return true
};

console.log(
    // palPerm(' rac  ecar rara '),
    // palPerm('chirpingmermaid'),
    // palPerm('code'),
    // palPerm('aabbcccc'),
    palPerm('aaba'),
    // palPerm('')
);


/*

aabbcccc -> abccccba
aaabbcccc -> bccaaaccb

Given a string, determine if a permutation of the string could form a palindrome.

Example 1:

Input: "code"
Output: false
Example 2:

Input: "aab"
Output: true
Example 3:

Input: "carerac"
Output: true
Hint:

Consider the palindromes of odd vs even length. What difference do you notice?
Count the frequency of each character.
If each character occurs even number of times, then it must be a palindrome. How about character which occurs odd number of times?
 
这道题让我们判断一个字符串的全排列有没有是回文字符串的，那么根据题目中的提示，我们分字符串的个数是奇偶的情况来讨论，如果是偶数的话，由于回文字符串的特性，每个字母出现的次数一定是偶数次，当字符串是奇数长度时，只有一个字母出现的次数是奇数，其余均为偶数，那么利用这个特性我们就可以解题，我们建立每个字母和其出现次数的映射，然后我们遍历 HashMap，统计出现次数为奇数的字母的个数，那么只有两种情况是回文数，第一种是没有出现次数为奇数的字母，再一个就是字符串长度为奇数，且只有一个出现次数为奇数的字母，参见代码如下：

*/