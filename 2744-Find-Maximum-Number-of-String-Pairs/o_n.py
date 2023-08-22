# https://leetcode.com/problems/find-maximum-number-of-string-pairs/submissions/1029027176/

class Solution:
    def maximumNumberOfStringPairs(self, words: List[str]) -> int:
        s = set()
        count = 0
        for word in words:
            if word in s:
                count += 1
            s.add(word[::-1])
        return count
