// https://leetcode.com/problems/intersection-of-two-arrays/submissions/1169171785/

function intersection(nums1: number[], nums2: number[]): number[] {
    const one = new Set(nums1);
    const two = new Set(nums2);
    const res = [];
    for(const num of two) {
        if(one.has(num)) res.push(num);
    }
    return res;
};
