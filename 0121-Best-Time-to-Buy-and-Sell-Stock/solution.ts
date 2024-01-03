function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let cheapest = prices[0];
    for(const price of prices){
        cheapest = Math.min(price, cheapest);
        maxProfit = Math.max(price - cheapest, maxProfit);
    }
    return maxProfit;
};
