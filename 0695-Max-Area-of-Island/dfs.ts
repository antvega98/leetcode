// https://leetcode.com/problems/max-area-of-island/submissions/1117712342/

function maxAreaOfIsland(grid: number[][]): number {
    const r = grid.length;
    const c = grid[0].length;

    let maxArea = 0;

    function dfs(i: number, j: number): number {
        if(0 <= i && i < r && 0 <= j && j < c && grid[i][j] === 1){
            grid[i][j] = 0;
            return 1 + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1);
        }
        return 0;
    }

    for(let i = 0; i < grid.length; ++i){
        for(let j = 0; j < grid[i].length; ++j){
            if(grid[i][j] === 1){
                maxArea = Math.max(maxArea, dfs(i,j));
            }
        }
    }
    return maxArea;
};
