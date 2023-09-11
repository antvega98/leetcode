# https://leetcode.com/problems/climbing-stairs/description/

class Solution:
    def climbStairs(self, n: int) -> int:
        back = 0
        front = 1
        while n > 0:
            tmp = front
            front = front + back
            back = tmp
            n -= 1
        return front

        '''
        Examples
        n = 1 (1 possibility)
        1 step 

        n = 2 (2 possibilities)
        1 step + 1 step
        2 steps

        n = 3 (3 possibilities)
        1 step + 1 step + 1 step
        1 step + 2 step
        2 step + 1 step

        n = 4 (5 possibilities)
        1 step + 1 step + 1 step + 1 step
        1 step + 1 step + 2 step
        1 step + 2 step + 1 step
        2 step + 1 step + 1 step
        2 step + 2 step

        n = 5 (8 possibilities)
        (all 1's)
        1 step + 1 step + 1 step + 1 step + 1 step
        (added 2)
        1 step + 1 step + 1 step + 2 step
        1 step + 1 step + 2 step + 1 step
        1 step + 2 step + 1 step + 1 step
        2 step + 1 step + 1 step + 1 step
        (added two 2's)
        1 step + 2 step + 2 step
        2 step + 1 step + 2 step
        2 step + 2 step + 1 step

        n = 6 (13 possibilities)
        (all 1's)
        1 step + 1 step + 1 step + 1 step + 1 step + 1 step
        (added 2)
        1 step + 1 step + 1 step + 1 step + 2 step 
        1 step + 1 step + 1 step + 2 step + 1 step 
        1 step + 1 step + 2 step + 1 step + 1 step 
        1 step + 2 step + 1 step + 1 step + 1 step 
        2 step + 1 step + 1 step + 1 step + 1 step 
        (added two 2s)
        1 step + 1 step + 2 step + 2 step
        1 step + 2 step + 1 step + 2 step
        1 step + 2 step + 2 step + 1 step
        2 step + 2 step + 1 step + 1 step
        2 step + 1 step + 2 step + 1 step
        2 step + 1 step + 1 step + 2 step
        (added three 2s)
        2 step + 2 step + 2 step

        n = 7 (21 possibilities)
        (all 1's)
        1 step + 1 step + 1 step + 1 step + 1 step + 1 step + 1 step
        (added 2) 6 possibilities
        1 step + 1 step + 1 step + 1 step + 1 step + 2 step 
        1 step + 1 step + 1 step + 1 step + 2 step + 1 step 
        1 step + 1 step + 1 step + 2 step + 1 step + 1 step 
        1 step + 1 step + 2 step + 1 step + 1 step + 1 step 
        1 step + 2 step + 1 step + 1 step + 1 step + 1 step 
        2 step + 1 step + 1 step + 1 step + 1 step + 1 step 
        (added two 2s) 10 possibilies
        11122
        11212
        12112
        12121
        12211
        11221
        22111
        21211
        21121
        21112
        (added three 2s) 4 possibilities
        2221
        2212
        2122
        1222

        '''
