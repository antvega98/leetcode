// https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/submissions/1119896639/?envType=study-plan-v2&envId=30-days-of-javascript

type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
	
    return new Promise((resolve, reject)=>{
        const results = new Array(functions.length);
        let count = 0;
        functions.forEach((fn, i)=>{
            fn().then((result)=>{
                results[i] = result;
                count++;
                if(count === functions.length){
                    resolve(results);
                }
            }).catch(error=>reject(error));
        })
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
