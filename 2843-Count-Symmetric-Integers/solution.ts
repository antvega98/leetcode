// https://leetcode.com/problems/count-symmetric-integers/submissions/1170163388/

function countSymmetricIntegers(low: number, high: number): number {
    let res = 0;

    for(let i = low; i <= high; ++i) {
        let length = Math.ceil(Math.log10(i + 1));
        if(length % 2 != 0) continue;
        if(isSymmetric(Array.from(String(i), Number))) ++res;
    }

    return res;
};

function isSymmetric(nums:number[]): boolean {
    let diff = 0;
    let i = 0;
    let j = nums.length - 1;
    while(i < j) {
        diff += nums[i++];
        diff -= nums[j--];
    }
    return diff === 0;
}
