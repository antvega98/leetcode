// https://leetcode.com/problems/number-of-islands/submissions/1118516305/


const DIRECTIONS =[ 
    [0,1],
    [0,-1],
    [1,0],
    [-1,0]
]
function numIslands(grid: string[][]): number {
    let numOfIslands = 0;

    function bfs(i: number, j:number) {
        const q = [[i, j]];
        grid[i][j] = "0";
        while(q.length > 0){
            const [curI, curJ] = q.pop();
            for(const [ci, cj] of DIRECTIONS){
                const newI = ci + curI;
                const newJ = cj + curJ;
                if(newI >= 0 && newJ >= 0 && newI < grid.length && newJ < grid[newI].length && grid[newI][newJ] === "1"){
                    grid[newI][newJ] = "0";
                    q.push([newI, newJ]);
                }
            }

        }
    }

    for(let i = 0 ; i < grid.length; ++i){
        for(let j = 0; j < grid[i].length; ++j){
            if(grid[i][j] === "1"){
                bfs(i, j);
                ++numOfIslands;
            }
        }
    }
    return numOfIslands;
};
