// https://leetcode.com/problems/valid-triangle-number/submissions/1154224494/

function triangleNumber(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let res = 0;
    for(let k = nums.length - 1; k > 1; --k){
        let i = 0;
        let j = k - 1;
        while(i < j){
            if(nums[i] + nums[j] > nums[k]){
                res += j - i;
                --j;
            } else {
                ++i;
            }
        }
    }
    return res;
};
