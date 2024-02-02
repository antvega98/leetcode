// https://leetcode.com/problems/number-of-1-bits/submissions/1163443539/
// https://leetcode.com/problems/number-of-1-bits/submissions/1163448188/

function hammingWeight(n: number): number {
    let res = 0;
    while(n > 0){
        if(n % 2 !== 0) ++res;
        n = Math.floor(n/2);
    }
    return res;
};

function hammingWeight(n: number): number {
    let ones = 0;
    while(n !== 0){
        if(n & 1) ++ones;
        n >>>= 1;
    }
    return ones;
};
