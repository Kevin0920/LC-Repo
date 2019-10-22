/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let result = [];
    if (p.length > s.length) return result;
    let map = new Map();
    for (let i = 0; i < p.length; i++) {
        let c = p[i];
        if (!map.get(c)) map.set(c, 1)
        else map.set(c, map.get(c) + 1)
    }
    let begin = 0;
    let end = 0;
    let count = map.size; // duplicate, p = 'aa', p.length = 2, map.size = 1

    while (end < s.length) {
        let char = s[end];
        // console.log(map)
        if (map.has(char)) {
            map.set(char, map.get(char) - 1); // [char, 1] => [char, 0]   
            if (map.get(char) === 0) count--;

        }
        end++;

        while (count === 0) {
            let startChar = s[begin];
            // console.log("????????", map.has(startChar))
            if (map.has(startChar)) {
                map.set(startChar, map.get(startChar) + 1);
                if (map.get(startChar) > 0) count++;
            }
            if (end - begin === p.length) result.push(begin);
            begin++;
        }
    }
    return result;
};