// https://leetcode.com/problems/add-two-promises/submissions/1111974208/?envType=study-plan-v2&envId=30-days-of-javascript

type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
	let num1 = await promise1;
	let num2 = await promise2;
	return num1 + num2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
