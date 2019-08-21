/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(grid === null || grid.length === 0 || grid[0].length === 0) return 0;
    
    let rows = grid.length,
        cols = grid[0].length,
        count = 0;
    
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            // when we see 1, then we turn all 1 into 0, then increase count by 1 
            if(grid[i][j] === '1') {
                count++;
                dfs(grid, i, j);
            }
        }
    }
    return count;
};

const dfs = (grid, i, j) => {
    // base case: rows out of bounce, cols out of bounce, 
    if(i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
        return;
    }
    
    // when we see '1' then set it to '0', means we visited the island already until search hit the bounce of water. main function doing count
    // recursion 
    grid[i][j] = '0';
    dfs(grid, i-1, j);
    dfs(grid, i+1, j);
    dfs(grid, i, j-1);
    dfs(grid, i, j+1);
}

console.log(numIslands(
    [
        ["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","0"],
        ["0","0","0","0","0"]
    ]
));
console.log(numIslands(
    [
        ["1","1","0","0","0"],
        ["1","1","0","0","0"],
        ["0","0","1","0","0"],
        ["0","0","0","1","1"]
    ]
));

