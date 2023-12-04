// https://leetcode.com/problems/sleep/submissions/1111982008/?envType=study-plan-v2&envId=30-days-of-javascript

async function sleep(millis: number): Promise<void> {
  await new Promise(resolve=>setTimeout(resolve, millis));
}


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
