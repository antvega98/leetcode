https://leetcode.com/problems/find-center-of-star-graph/submissions/1005559467/
class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        def compareEdges(e1, e2):
            return e1[0] if e1[0] == e2[0] or e1[0] == e2[1] else e1[1]
            
        center = 0
        for i in range(1,len(edges)):
            center = compareEdges(edges[i], edges[i - 1])

        return center

# We don't need to check for others.
class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        return edges[0][0] if edges[0][0] == edges[1][0] or edges[0][0] == edges[1][1] else edges[0][1]
