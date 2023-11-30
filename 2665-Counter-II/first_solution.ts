// https://leetcode.com/problems/counter-ii/submissions/1109223929/?envType=study-plan-v2&envId=30-days-of-javascript

type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
    let copy = init;
	return {
        increment:()=>{
            return ++copy;
        },
        decrement:()=>{
            return --copy;
        },
        reset:()=>{
            copy = init;
            return init;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
