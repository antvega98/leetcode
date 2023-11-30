// https://leetcode.com/problems/function-composition/submissions/1109850047/?envType=study-plan-v2&envId=30-days-of-javascript

type F = (x: number) => number;

function compose(functions: F[]): F {
    
	return function(x) {
        let res = x;
        for(let i = functions.length - 1; i >= 0; --i){
            res = functions[i](res);
        }
        return res;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
