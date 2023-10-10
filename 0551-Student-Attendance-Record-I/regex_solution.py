# https://leetcode.com/problems/student-attendance-record-i/submissions/1071421323/

class Solution:
    def checkRecord(self, s: str) -> bool:
        return len(re.findall("A", s)) <= 1 and len(re.findall("LLL", s)) == 0
