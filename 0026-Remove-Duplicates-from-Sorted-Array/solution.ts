// https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/1123855369/

function removeDuplicates(nums: number[]): number {
    let back = null;
    let k = 0;
    for(let i = 0; i < nums.length; ++i){
        if(back === null){
            back = i;
            ++k;
            continue;
        }
        if(nums[i] !== nums[back]){
            nums[back + 1] = nums[i];
            back = back + 1;
            ++k;
        }
    }
    return k;
};
