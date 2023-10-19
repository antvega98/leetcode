# https://leetcode.com/problems/next-greater-element-i/submissions/1078850717/
class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        waitlist = []
        d = {}
        for num in nums2:
            while len(waitlist) != 0 and waitlist[-1] < num:
                d[waitlist.pop()] = num
            waitlist.append(num)
        return [d[num] if num in d else -1 for num in nums1]
