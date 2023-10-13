// https://leetcode.com/problems/count-integers-with-even-digit-sum/submissions/1074567172/

/**
 * @param {number} num
 * @return {number}
 */

function getDigits(num){
    let res = 0;
    while(num > 0){
        res += num % 10;
        num = Math.floor(num/10)
    }
    return res % 2 == 0;
}
var countEven = function(num) {
    let res = 0;
    for(let i = 2; i <= num; ++i){
        if(getDigits(i)){
            ++res;
        }
    }
    return res;
};
