# https://leetcode.com/problems/account-balance-after-rounded-purchase/submissions/1015167132/

class Solution:
    def accountBalanceAfterPurchase(self, purchaseAmount: int) -> int:
        return  100 - (((purchaseAmount + 5) // 10) * 10)
