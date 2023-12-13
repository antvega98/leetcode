// https://leetcode.com/problems/number-of-islands/submissions/1118503637/

function numIslands(grid: string[][]): number {
    let numOfIslands = 0;

    function dfs(i: number, j:number) {
        if(i >= 0 && j >= 0 && i < grid.length && j < grid[i].length && grid[i][j] === "1"){
            grid[i][j] = "0";
            dfs(i - 1, j);
            dfs(i + 1, j);
            dfs(i, j - 1);
            dfs(i, j + 1);
        }
    }

    for(let i = 0 ; i < grid.length; ++i){
        for(let j = 0; j < grid[i].length; ++j){
            if(grid[i][j] === "1"){
                dfs(i, j);
                ++numOfIslands;
            }
        }
    }
    return numOfIslands;
};
