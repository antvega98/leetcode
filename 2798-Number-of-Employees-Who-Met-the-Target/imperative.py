# https://leetcode.com/problems/number-of-employees-who-met-the-target/submissions/1013936767/

class Solution:
    def numberOfEmployeesWhoMetTarget(self, hours: List[int], target: int) -> int:
        return sum(1 if hour >= target else 0 for hour in hours)
