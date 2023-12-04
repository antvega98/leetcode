// https://leetcode.com/problems/add-two-promises/submissions/1111975287/?envType=study-plan-v2&envId=30-days-of-javascript

type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
	const [val1, val2] = await Promise.all([promise1, promise2]);
	return val1 + val2;
};

type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
	return await Promise.all([promise1, promise2]).then(([val1, val2]) => val1 + val2);
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
