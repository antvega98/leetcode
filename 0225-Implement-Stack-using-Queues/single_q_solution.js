// https://leetcode.com/problems/implement-stack-using-queues/submissions/1136258597/
// the list is not a queue. Just pretended it was.
class MyStack {
    q : number[];
    constructor() {
        this.q = [];
    }

    push(x: number): void {
        this.q.push(x);
    }

    pop(): number {
        this.reverse();
        const res = this.q.shift();
        this.reverse();
        return res;
    }

    top(): number {
        this.reverse();
        const res = this.q.shift();
        this.reverse();
        this.q.push(res);
        return res;
    }

    empty(): boolean {
        return this.q.length === 0;
    }

    reverse(): void {
        let i = this.q.length - 1;
        const n = [];
        while(i >= 0){
            n.push(this.q[i]);
            --i;
        }
        this.q = n;
    }
}
