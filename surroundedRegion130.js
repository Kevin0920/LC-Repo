/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if(board === null || board.length === 0 || board[0].length === 0) return;
    
    const rows = board.length,
          cols = board[0].length;
    
    
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(i === 0 || i === board.length - 1 || j === 0 || j === board[i].length - 1){
                dfs(board,i,j);
            }
        }
    }
    
    
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(board[i][j] === 'O') board[i][j] = 'X';
            if(board[i][j] === 'A') board[i][j] ='O';
        }
    }
    
    return board;
};


const dfs = (board, i, j) => {
  if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] !== "O")
    return;

  board[i][j] = "A";
  dfs(board, i + 1, j);
  dfs(board, i - 1, j);
  dfs(board, i, j + 1);
  dfs(board, i, j - 1);
}















