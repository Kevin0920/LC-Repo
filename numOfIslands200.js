var numIslands = function(grid) {
    if (grid === null || grid.length === 0 || grid[0].length === 0) {
        return 0;
    }

    let rows = grid.length,
        cols = grid[0].length,
        count = 0;
    
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < cols.length; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(grid, i, j, rows, cols);
            }
        }
    }
    
    return count;
};


const dfs = (grid, x, y, rows, cols) => {
    // base case for checking out of bounce
    if (x < 0 || x >= rows || y < 0 || y >= cols || grid[x][y] === '0') {
        return;
    }

    

}

console.log(numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]));


/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3

*/