# https://leetcode.com/problems/number-of-employees-who-met-the-target/submissions/1013949768/

class Solution:
    def numberOfEmployeesWhoMetTarget(self, hours: List[int], target: int) -> int:
        return sum(map(lambda x: 1 if x >= target else 0, hours))
