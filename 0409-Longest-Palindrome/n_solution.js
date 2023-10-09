// https://leetcode.com/problems/longest-palindrome/submissions/1070659775/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let d = {};
    for(const val of s){
        d[val] = d[val] ?? 0;
        d[val]++;
    }
    let pairs = 0;
    let leftovers = 0;
    for(const key in d){
        pairs += Math.floor(d[key] / 2);
        leftovers += (d[key] % 2);
    }
    return (2 * pairs) + (leftovers >= 1? 1:0);
};
