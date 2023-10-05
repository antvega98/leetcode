// https://leetcode.com/problems/max-consecutive-ones/submissions/1067310188/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max_consec = 0;
    let cur_consec = 0;
    for(const num of nums){
        cur_consec = num === 1 ? cur_consec + 1 : 0
        max_consec = Math.max(cur_consec, max_consec)
    }
    return max_consec;
};
