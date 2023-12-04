// https://leetcode.com/problems/allow-one-function-call/submissions/1112427231/?envType=study-plan-v2&envId=30-days-of-javascript

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
  let once = false;
	return function (...args) {
		if(!once) {
			once = true;
			return fn(...args);			
		}
	};
}

function once(fn: Function): OnceFn {
  let once = 1;
	return function (...args) {
		if(once === 0) {
			return undefined;
		}
		once--;
		return fn(...args);
	};
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
