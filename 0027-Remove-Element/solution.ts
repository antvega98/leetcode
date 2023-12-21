// https://leetcode.com/problems/remove-element/submissions/1124804771/

function removeElement(nums: number[], val: number): number {
    let back = 0;
    for(let i = 0; i < nums.length; ++i){
        if(nums[i] !== val){
            nums[back] = nums[i];
            ++back;
        }
    }
    return back;
};
