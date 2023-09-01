# https://leetcode.com/problems/valid-parentheses/submissions/1038024238/

class Solution:
    def isValid(self, s: str) -> bool:
        d = {')':'(', '}':'{', ']': '['}
        stack = []
        for brace in s:
            if brace not in d:
                # openning brace, append to stack
                stack.append(brace)
                continue
            if not stack or stack.pop() != d[brace]:
                return False
        return len(stack) == 0 
