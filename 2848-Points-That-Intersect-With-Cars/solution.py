# https://leetcode.com/problems/points-that-intersect-with-cars/submissions/1061659953/

class Solution:
    def numberOfPoints(self, intervals: List[List[int]]) -> int:
        points = set()
        for start, end in intervals:
            points.update(range(start, end + 1))
        return len(points)
