// https://leetcode.com/problems/sign-of-the-product-of-an-array/submissions/1085005159/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let prod = 1;
    for(const num of nums){
        if(num === 0){
            return 0
        }
        prod *= num < 0 ? -1 : 1;
    }
    return prod;
};
