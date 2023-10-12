// https://leetcode.com/problems/third-maximum-number/submissions/1073098271/

/**
 * @param {number[]} nums
 * @return {number}
 */

function kthLargest(nums, k){
    const arr = [];
    for(const num of nums){
        if(arr.includes(num)){
            continue;
        }
        arr.push(num);
        arr.sort((a, b) => b - a)
        if(arr.length > 3){
            arr.pop();
        }
    }
    return arr.length >= 3 ? arr[arr.length - 1] : arr[0]  ;
}
var thirdMax = function(nums) {
    return kthLargest(nums, 3);
};
