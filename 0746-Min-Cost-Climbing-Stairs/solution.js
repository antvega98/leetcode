// https://leetcode.com/problems/min-cost-climbing-stairs/submissions/1074605877/
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let res = [...cost, 0];
    for(let i = 2; i < res.length; ++i){
        res[i] += Math.min(res[i - 1], res[i - 2]);
    }
    return res.at(-1);
};
