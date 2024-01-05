// https://leetcode.com/problems/longest-increasing-subsequence/submissions/1137262736/

function lengthOfLIS(nums: number[]): number {
    let res = Array(nums.length).fill(1);

    for(let i = 0; i < nums.length; ++i){
        for(let j = 0; j < i; ++j){
            if(nums[j] < nums[i]){
                res[i] = Math.max(res[i], res[j] + 1);
            }
        }
    }
    return Math.max(...res);
};
