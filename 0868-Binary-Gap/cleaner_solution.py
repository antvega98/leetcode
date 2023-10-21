# https://leetcode.com/problems/binary-gap/submissions/1080300641/

class Solution:
    def binaryGap(self, n: int) -> int:
        m_len = 0
        start = 0
        b = f"{n:b}"
        for i in range(len(b)):
            if b[i] == '1':
                m_len = max(m_len, i - start)
                start = i
        return m_len
