// https://leetcode.com/problems/counter/submissions/1033672395/

var createCounter = function(n) {
    return function(){
        return n++
    }
}
var createCounter = function(n) {
    return () => {
        return n++
    }
}
var createCounter = function(n) {
    return () => n++
}
var createCounter = (n) => () => n++
