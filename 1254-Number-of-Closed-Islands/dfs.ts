// https://leetcode.com/problems/number-of-closed-islands/submissions/1120060114/

function closedIsland(grid: number[][]): number {
    const r = grid.length;
    const c = grid[0].length;

    function dfs(i: number, j:number){
        if(i >= 0 && i < r && j >= 0 && j < c && grid[i][j] === 0){
            grid[i][j] = 1;
            dfs(i + 1, j);
            dfs(i - 1, j);
            dfs(i, j + 1);
            dfs(i, j - 1);
        }
    }

    // sink grid edges
    for(let i = 0; i < r; ++i){
        dfs(i,0);
        dfs(i, c-1);
    }

    for(let j = 0; j < c; ++j){
        dfs(0, j);
        dfs(r - 1, j);
    }

    for(let i = 0; i < grid.length; ++i){
        console.log(grid[i].join(''));
    }
    
    let res = 0;
    for(let i = 0; i < r; ++i){
        for(let j = 0; j < c; ++j){
            if(grid[i][j] === 0){
                dfs(i, j);
                ++res;
            }
        }
    }
    return res;
};
