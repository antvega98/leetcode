# https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/submissions/1029998082/

class Solution:
    def isEvenAndThreshold(self, num, threshold):
        return num % 2 == 0 and num <= threshold
    
    def isEven(self, num):
        return num % 2 == 0

    def longestAlternatingSubarray(self, nums: List[int], threshold: int) -> int:
        ans = [[]]
        for num in nums:
            if len(ans[-1]) == 0 and self.isEvenAndThreshold(num, threshold):
                ans[-1].append(num)
                continue
            if len(ans[-1]) > 0:
                if self.isEven(ans[-1][-1]) != self.isEven(num) and num <= threshold:
                    ans[-1].append(num)
                elif self.isEvenAndThreshold(num, threshold):
                    ans.append([num])
                else:
                    ans.append([])

        largest_array = []
        for arr in ans:
            if len(largest_array) < len(arr):
                largest_array = arr
        
        return len(largest_array)
