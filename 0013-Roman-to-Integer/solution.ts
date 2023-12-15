// https://leetcode.com/problems/roman-to-integer/submissions/1119957534/

const D = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

function romanToInt(s: string): number {
    let total = 0;
    let prevLetterValue = null;
    for(let i = 0; i < s.length; ++i){
        const curVal = D[s[i]];
        if(prevLetterValue && prevLetterValue < curVal){
            total -= (prevLetterValue * 2);
        } 
        total += curVal;
        prevLetterValue = curVal;
    }
    return total;
};
