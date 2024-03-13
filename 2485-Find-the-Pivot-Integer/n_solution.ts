// https://leetcode.com/problems/find-the-pivot-integer/submissions/1202087031/

function pivotInteger(n: number): number {
    const nums = new Map();
    let sum = 0;
    for(let i = n; i > 0; --i) {
        sum = i + sum;
        nums.set(i, sum);
    }

    sum = 0;
    for(let i = 1; i <= n; ++i){
        sum = i + sum;
        if(nums.get(i) === sum) return i
    }
    return -1;
};
