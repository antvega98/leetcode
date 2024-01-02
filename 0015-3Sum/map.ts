// https://leetcode.com/problems/3sum/submissions/1134295276/

function threeSum(nums: number[]): number[][] {
    nums.sort((a, b)=>a - b);
    const res = new Map();
    for(let i = 0; i < nums.length; ++i){
        let low = i + 1;
        let high = nums.length - 1;
        while(low < high){
            const curSum = nums[i] + nums[low] + nums[high];
            if(curSum === 0){
                res.set(`${nums[i]}-${nums[low]}-${nums[high]}`, [nums[i], nums[low], nums[high]]);
                ++low;
                --high;
            } else if (curSum < 0){
                ++low;
            } else {
                --high;
            }
        }
    }
    return Array.from(res.values());
};
