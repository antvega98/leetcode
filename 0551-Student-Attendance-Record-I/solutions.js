// https://leetcode.com/problems/student-attendance-record-i/submissions/1068944814/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absents = 0;
    let tards = 0;
    for(let i = 0; i < s.length; ++i){
        if(s[i] === 'A'){
            ++absents;
            if(absents === 2){
                return false;
            }
        }
        if (s[i] === 'L'){
            ++tards;
            if(tards === 3) {
                return false;
            }
            continue;
        }
        tards = 0;
    }
    return true;
};
