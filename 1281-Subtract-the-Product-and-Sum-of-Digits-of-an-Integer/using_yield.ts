// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/submissions/1183527175/

function subtractProductAndSum(n: number): number {
    let prod = 1;
    let sum = 0;
    for(const digit of getDigits(n)){
        prod *= digit;
        sum += digit;
    }
    return prod - sum;
};

function* getDigits(n: number): Generator<number> {
    while(n > 0) {
        yield n % 10;
        n = Math.floor(n/10);
    }
}
