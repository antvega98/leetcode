// https://leetcode.com/problems/last-stone-weight/submissions/1188290337/

function lastStoneWeight(stones: number[]): number {
    const pq = new MaxPriorityQueue();

    for(const stone of stones) {
        pq.enqueue(stone);
    }

    while(pq.size() > 1) {
        const one = pq.dequeue().element;
        const two = pq.dequeue().element;
        if(one === two) continue;
        pq.enqueue(one - two);
    }

    return pq.dequeue()?.element ?? 0;
};
