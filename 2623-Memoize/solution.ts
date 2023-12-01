// https://leetcode.com/problems/memoize/submissions/1109863863/?envType=study-plan-v2&envId=30-days-of-javascript

type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    let mem = new Map<string, number>();
    return function(...args) {
        const key = JSON.stringify(args);
        if(!mem.has(key)){
            mem.set(key, fn(...args));
        }
        return mem.get(key);
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
