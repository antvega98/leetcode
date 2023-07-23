# https://leetcode.com/problems/count-primes/submissions/1001372164/

class Solution:
    def countPrimes(self, n: int) -> int:
        is_prime = [True] * (n+1)

        index = 2
        while index < n/2:

            multiple = index * 2

            while multiple < n:
                is_prime[multiple] = False
                multiple += index
            
            index += 1
            while is_prime[index] == False:
                index += 1

        return sum(is_prime[2:n])
