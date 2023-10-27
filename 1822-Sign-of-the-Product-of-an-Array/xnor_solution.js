// https://leetcode.com/problems/sign-of-the-product-of-an-array/submissions/1085011256/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let isPos = true;
    for(const num of nums){
        if(num === 0){
            return 0
        }
        isPos = (isPos === num > 0)
    }
    return isPos ? 1 : -1;
};
