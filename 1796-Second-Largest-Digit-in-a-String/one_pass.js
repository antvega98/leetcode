// https://leetcode.com/problems/second-largest-digit-in-a-string/submissions/1072275022/

/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let largest = -1;
    let second = -1;
    for(const char of s){
        if (char >= '0' && char <= '9'){
            const curInt = parseInt(char);
            if(curInt > largest){
                second = largest;
                largest = curInt
            } else if (curInt > second && curInt < largest){
                second = curInt;
            }
        }
    }   
    return second;
};
