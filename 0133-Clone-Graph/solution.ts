// https://leetcode.com/problems/clone-graph/submissions/1166339030/

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
    if(node == null) return null;
	// how to clone a graph?

    // well, i need to traverse through all the nodes
    // As I traverse, I should make clones and save them.

    // how do traverse a graph?
    // will need a queue
    // Add node and every neighbor to queue.
    // should create map to keep track of visited nodes..could create clone in value

    const clones = new Map();
    clones.set(node, new Node(node.val));

    const q = [node];
    while(q.length > 0) {
        const cur = q.shift();

        for(const nbr of cur.neighbors) {
            if(clones.has(nbr)) continue;
            q.push(nbr);
            clones.set(nbr, new Node(nbr.val));
        }
    }

    for(const [original, clone] of clones){
        for(const nbr of original.neighbors){
            clone.neighbors.push(clones.get(nbr));
        }
    }

    return clones.get(node);
};
