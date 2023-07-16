# https://leetcode.com/problems/removing-stars-from-a-string/description/
# https://leetcode.com/problems/removing-stars-from-a-string/submissions/996201749/

class Solution:
    def removeStars(self, s: str) -> str:
        # Problem
        # Remove stars and character to the left.

        # Ideas:
        # 1. Double for loop
        # 2. Stack

        stack = []
        for let in s:
            if let == "*":
                stack.pop()
            else:
                stack.append(let)
        return "".join(str(char) for char in stack)
