// https://leetcode.com/problems/longest-harmonious-subsequence/submissions/1078025696/
/**
 * @param {number[]} nums
 * @return {number}
 */


var findLHS = function(nums) {
    let d = {};

    for(const num of nums){
        d[num] = (d[num] ?? 0) + 1;
    }
    console.log(d)
    let maxLength = 0
    for(const key in d){
        if(d[+key + 1]){
            if(d[+key + 1] + d[key] > maxLength){
                maxLength = d[+key + 1] + d[key]
            }
        }
    }
    return maxLength
};
