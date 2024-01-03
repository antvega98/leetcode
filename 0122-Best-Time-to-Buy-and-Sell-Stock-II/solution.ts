// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/submissions/1135250554/

function maxProfit(prices: number[]): number {
    let totalProfit = 0;
    for(let i = 1; i < prices.length; ++i){
        totalProfit += Math.max(prices[i] - prices[i - 1], 0);
    }
    return totalProfit;
};
