// https://leetcode.com/problems/arithmetic-subarrays/submissions/1104581580/

function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
    // Example 1
    // nums = [4,6,5,9,3,7]
    // l = [0,0,2], r = [2,3,5]
    // [true,false,true]
    let res = [];
    for(let i = 0; i < l.length; ++i){
        let curSubArray = getSubArray(nums, l[i], r[i]);
        curSubArray.sort((a, b)=>a-b);
        res.push(isArithmetic(curSubArray));
    }
    return res;
};

function getSubArray(nums: number[], start: number, end:number): number[]{
    return nums.slice(start, end + 1);
}

function isArithmetic(nums: number[]): boolean {
    const first = nums[1];
    const second = nums[0];
    const commonDifference = first - second;
    for(let i = 0; i < nums.length - 1; ++i){
        if(nums[i + 1] - nums[i] !== commonDifference){
            return false;
        }
    }
    return true;
}
