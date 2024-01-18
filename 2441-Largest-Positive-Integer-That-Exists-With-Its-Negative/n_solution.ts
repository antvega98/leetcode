// https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/submissions/1149378597/

function findMaxK(nums: number[]): number {
    const s = new Set([...nums]);
    let max = -1;
    for(const num of s){
        if(s.has(-num)){
            max = Math.max(num, max);
        }
    }
    return max;
};
