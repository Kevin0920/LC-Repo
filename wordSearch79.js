var exist = function(board, word) {

    if (word === '') return true;
    // declare row and col

    let row = board.length,
        col = board[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            // if we see word first char at board row and col current postion, then we call the search method
            if (word[0] === board[i][j] && dfs(0, i, j, word, board)) return true;
        }
    }
    return false;

};


const dfs = (index, row, col, word, board) => {
    // we successfully find the full word
    if (index === word.length) return true;


    // below is base case 
    // row out of bouncs, col out of bounce, word character not equal to the current position
    if (row < 0 || row >= board.length || col < 0 || col >= board[row].length || word[index] !== board[row][col]) {
        return false;
    }

    // recursion 
    if (board[row][col] !== '' && board[row][col] === word[index]) {

        // we do not want go back to check where we were 
        let visited = board[row][col];
        board[row][col] = '';

        // word keep going find the next index of the word 
        if (dfs(index + 1, row - 1, col, word, board)) return true; // up
        if (dfs(index + 1, row + 1, col, word, board)) return true; // down
        if (dfs(index + 1, row, col - 1, word, board)) return true; // left
        if (dfs(index + 1, row, col + 1, word, board)) return true; // right
        board[row][col] = visited;
    }

    return false;
}

console.log(exist(
    [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ], "ABCCED"));
console.log(exist(
    [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ], "ABCB"));

/*

复杂度： Time复杂度: 遍历整个m * n 的board的时间复杂度为m * n,对于每个点都会往上下左右来遍历寻找， k为word长度，大概要遍历4^k次，所以总的时间复杂度大概在mn4^k.
Space： 由于word长度为k，recursive space大概在O(k).

*/