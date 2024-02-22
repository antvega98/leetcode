// https://leetcode.com/problems/count-the-digits-that-divide-a-number/submissions/1182534672/

function countDigits(num: number): number {
    let res = 0;
    for(const digit of getDigits(num)){
        if(num % digit === 0) ++res;
    }
    return res;
};

function* getDigits(n: number) : Generator<number> {
    while(n > 0) {
        yield n % 10;
        n = Math.floor(n / 10);
    }
}
