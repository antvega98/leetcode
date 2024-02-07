// https://leetcode.com/problems/intersection-of-two-arrays-ii/submissions/1169187678/

function intersect(nums1: number[], nums2: number[]): number[] {
    const m = new Map();
    for(const num of nums1){
        m.set(num, (m.get(num) ?? 0) + 1);
    }

    const res = [];
    for(const num of nums2) {
        if(m.has(num) && m.get(num) - 1 >= 0) {
            m.set(num, m.get(num) - 1);
            res.push(num);
        }
    }
    return res;
};
