/**
 * Initialize your data str{ucture here.
 */
var TrieNode = function(val) {
    this.val = val || ''; // insert word val
    this.children = {}; // chiidren leaf node 
    this.isWord = false;
}

var Trie = function() {
    this.root = new TrieNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let cur = this.root;

    for (var i = 1; i <= word.length; i++) {
        var char = word.substring(0, i);
        if (!(char in cur.children))
            cur.children[char] = new TrieNode(char);
        cur = cur.children[char];
    }
    cur.isWord = true;
};
/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    var cur = this.root;
    for (var i = 1; i <= word.length; i++) {
        var char = word.substring(0, i);
        if (!(char in cur.children))
            return false;
        else
            cur = cur.children[char];
    }

    return cur.isWord;
};


/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    var cur = this.root;
    for (var i = 1; i <= prefix.length; i++) {
        var char = prefix.substring(0, i);
        if (!(char in cur.children))
            return false
        cur = cur.children[char];
    }

    return true;
};