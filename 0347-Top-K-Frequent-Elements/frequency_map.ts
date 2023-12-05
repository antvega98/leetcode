// https://leetcode.com/problems/top-k-frequent-elements/submissions/1112598111/

function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map();
    for(const num of nums){
        map.set(num, (map.get(num) ?? 0) + 1);
    }

    const elems = [];
    for(const [key, val] of map){
        elems.push([key, val]);
    }

    elems.sort((a, b)=>b[1] - a[1]);
    const res = [];
    for(let i = 0; i < k; ++i){
        res.push(elems[i][0]);
    }
    return res;
};
