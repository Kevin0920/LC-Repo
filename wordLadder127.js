/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let dic = new Set(wordList);
    if (!dic.has(endWord)) return 0;
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let visited = new Set();
    visited.add(beginWord);
    let queue = [beginWord, null];
    let step = 0;

    while (queue.length > 0) {
        let word = queue.shift();
        if (word === endWord) {
            return step + 1;
        }
        if (word === null) {
            if (!queue.length) return 0;
            queue.push(null);
            step++;
        } else {
            for (let i = 0; i < word.length; i++) {
                for (let j = 0; j < alphabets.length; j++) {
                    let temp = word.substring(0, i) + alphabets[j] + word.substring(i + 1, word.length);
                    if (dic.has(temp) && !visited.has(temp)) {
                        queue.push(temp);
                        visited.add(temp);
                    }
                }
            }
        }
    }
    return 0;
};