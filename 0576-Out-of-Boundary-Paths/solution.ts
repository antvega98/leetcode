// https://leetcode.com/problems/out-of-boundary-paths/submissions/1162510267/

const DIRS = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];

const MOD = 10**9 + 7;

function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {
    const cache = {};
    function dfs(moves: number, i: number, j: number): number {
        if(i < 0 || j < 0 || i >= m || j >= n){
            return 1;
        } 
        if(moves === 0) {
            return 0;
        }
        const key = `${i} ${j} ${moves}`;
        if(cache[key] != null) {
            return cache[key];
        }
        let res = 0;
        for(const [di, dj] of DIRS){
            res += dfs(moves - 1, i + di, j + dj);
        }
        cache[key] = res % MOD;
        return cache[key];
    }
    
    return dfs(maxMove, startRow, startColumn);;
};
