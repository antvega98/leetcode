// https://leetcode.com/problems/implement-queue-using-stacks/submissions/1184428558/

class MyQueue {
    stack1 : number[];
    stack2 : number[];

    front : number;

    constructor() {
        this.stack1 = [];
        this.stack2 = [];
        this.front = null;
    }

    push(x: number): void {
        if(!this.front) this.front = x;
        this.stack1.push(x);
    }

    pop(): number {
        while(this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
        const res = this.stack2.pop();
        this.front = null;
        while(this.stack2.length > 0) {
            const cur = this.stack2.pop();
            if(!this.front) this.front = cur;
            this.stack1.push(cur);
        }        
        return res;
    }

    peek(): number {
        return this.front;
    }

    empty(): boolean {
        return this.stack1.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
