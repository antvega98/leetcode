# https://leetcode.com/problems/asteroid-collision/description/

class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        # Problem
        # Find remaining astroids after all collisions.

        stack = []
        for i in range(len(asteroids)):
            if not stack or stack[-1] < 0 or asteroids[i] > 0:
                stack.append(asteroids[i])
                continue

            gotDestroyed = False
            while stack and stack[-1] > 0:
                if abs(asteroids[i]) > abs(stack[-1]):
                    stack = stack[:-1]
                    continue
                if abs(asteroids[i]) == abs(stack[-1]):
                    gotDestroyed = True
                    stack = stack[:-1]
                    break                    
                if abs(asteroids[i] < abs(stack[-1])):
                    gotDestroyed = True
                    break
            if not gotDestroyed:
                stack.append(asteroids[i])
        return stack
