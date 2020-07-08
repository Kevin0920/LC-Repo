/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    if(grid === null || grid.length === 0 || grid[0].length === 0) return 0;
    
    let island = 0;
    let count = 0;
    let m = grid.length;
    let n = grid[0].length;
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            // calculate how many islands
            if(grid[i][j] === 1) {
                island++;
                // calculate how many neigbor islands, then subtract the amount. will get the whole island length
                if(i > 0 && grid[i - 1][j] === 1) count++;
                if(j > 0 && grid[i][j - 1] === 1) count++;
                if(i < m - 1 && grid[i + 1][j] === 1) count++;
                if(j < n - 1 && grid[i][j + 1] === 1) count++;
            }
        }
    }
    return 4 * island - count;
};


/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    if(grid === null || grid.length === 0 || grid[0].length === 0) return 0;
    
    let islandLen = 0;
    let m = grid.length;
    let n = grid[0].length;
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 1) {
                // get the total island perimeter with nearby island orignal edge
                islandLen += 4;
                if(i > 0 && grid[i - 1][j] === 1) islandLen--;
                if(j > 0 && grid[i][j - 1] === 1) islandLen--;
                if(j < n - 1 && grid[i][j + 1] === 1) islandLen--;
                if(i < m - 1 && grid[i + 1][j] === 1) islandLen--;
            }
        }
    }
    
    return islandLen;
};