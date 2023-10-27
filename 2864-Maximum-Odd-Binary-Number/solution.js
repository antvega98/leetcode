// https://leetcode.com/problems/maximum-odd-binary-number/submissions/1085019236/

/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let ones = 0;
    for(const char of s){
        if(char === '1'){
            ones += 1;
        }
    }

    ones = ones - 1;

    let res = "";
    for(let i = 0; i < s.length; ++i){
        if(ones > 0){
            res += '1';
            ones -= 1;
            continue
        }
        res += '0';
    }
    return res.slice(0, -1) + "1";
};
