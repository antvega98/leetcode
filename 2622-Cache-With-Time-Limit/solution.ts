// https://leetcode.com/problems/cache-with-time-limit/submissions/1117559435/?envType=study-plan-v2&envId=30-days-of-javascript

class TimeLimitedCache {
    private cache : Map<number, any>;
    constructor() {
        this.cache = new Map<number, any>();
    }
    
    set(key: number, value: number, duration: number): boolean {
        const found = this.cache.has(key);
        if(found) clearTimeout(this.cache.get(key).ref);
        this.cache.set(key,{
            value,
            ref: setTimeout(()=>this.cache.delete(key), duration)
        });
        return found;
    }

    get(key: number): number {
        return this.cache.has(key) ? this.cache.get(key).value : -1;
    }

    count(): number {
        return this.cache.size;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
