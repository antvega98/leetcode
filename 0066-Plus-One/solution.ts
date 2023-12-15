// https://leetcode.com/problems/plus-one/submissions/1119940130/

function plusOne(digits: number[]): number[] {
    let i = digits.length - 1;
    while(i >= 0){
        if(digits[i] === 9){
            digits[i] = 0;
        } else {
            digits[i]++;
            return digits;
        }
        --i;
    }
    return [1, ...digits];
};
