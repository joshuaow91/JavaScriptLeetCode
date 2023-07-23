// leet code easy

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Solution

var maxProfit = function(prices) {
    // Initialize the minimum price to the first price in the array
    var minPrice = prices[0];
    // Initialize maxProfit to 0, as it's the minimum profit to be made
    var maxProfit = 0;
    
    // Iterate over the array starting from the second element
    for(var i = 1; i < prices.length; i++) {
        // If the current price is less than the minimum price found so far
        if(prices[i] < minPrice) {
            // Update the minimum price
            minPrice = prices[i];
        }
        // If the current profit (current price - minPrice) is more than maxProfit found so far
        else if(prices[i] - minPrice > maxProfit) {
            // Update maxProfit
            maxProfit = prices[i] - minPrice;
        }
    }
    // Return the maxProfit found
    return maxProfit;
};
