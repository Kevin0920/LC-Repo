/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    var root = buildTrie(words);
    var result = [];

    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            searchWord(result, root, board, i, j);
        }
    }

    return result;
};

function searchWord(result, root, board, i, j) {
    if (root.word) {
        result.push(root.word);
        root.word = null;
    }

    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
        return;
    }

    if (board[i][j] === '#' || !root[board[i][j]]) {
        return;
    }

    var ch = board[i][j];
    board[i][j] = '#';
    root = root[ch];
    searchWord(result, root, board, i + 1, j);
    searchWord(result, root, board, i - 1, j);
    searchWord(result, root, board, i, j + 1);
    searchWord(result, root, board, i, j - 1)

    board[i][j] = ch;
}

function buildTrie(words) {
    var root = new TrieNode();

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var node = root;

        for (var j = 0; j < word.length; j++) {
            var ch = word[j];

            if (!node[ch]) {
                node[ch] = new TrieNode();
            }
            node = node[ch];
        }

        node.word = word;
    }

    return root;
}

class TrieNode {
    constructor() {
        this.word = null;
        this.key = "";
    }
}