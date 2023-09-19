// https://leetcode.com/problems/circular-sentence/submissions/1053730685/

/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    for(let i = 0; i < sentence.length; ++i){
        if(sentence[i] === ' ' && sentence[i - 1] !== sentence[i + 1]){
            return false
        }
    }
    return sentence[0] === sentence[sentence.length - 1]
};
