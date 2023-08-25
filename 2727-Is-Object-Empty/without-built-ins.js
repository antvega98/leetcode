// https://leetcode.com/problems/is-object-empty/submissions/1031797821/

var isEmpty = (obj) => {
    for(const key in obj) return false 
    return true
}
