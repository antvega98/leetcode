// https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/submissions/1149366666/

function findMaxK(nums: number[]): number {
    nums.sort((a, b)=>a - b);

    let left = 0;
    let right = nums.length - 1;
    while(left < right){
        if(-nums[left] === nums[right]){
            return nums[right];
        }
        if(Math.abs(nums[left]) > nums[right]) {
            ++left;
            continue;
        }
        --right;
    }
    return -1;
};
